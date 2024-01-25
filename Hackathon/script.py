import streamlit as st
from datetime import date
import time
import matplotlib.pyplot as plt
import numpy as np
from polygon import RESTClient
import pandas as pd 

st.set_option('deprecation.showPyplotGlobalUse', False)

st.title('Is Crypto better than Equity ?')
st.text('Choose one stock and one crypto and compare their performance!')

# Choose the Stock

stocks_data = {
    "Apple Inc. (AAPL)": "AAPL",
    "Alphabet Inc. (GOOGL)": "GOOGL",
    "Amazon.com Inc. (AMZN)": "AMZN",
    "Microsoft Corporation (MSFT)": "MSFT",
    "Tesla Inc. (TSLA)": "TSLA",
    "Meta Platforms, Inc. (FB)": "META",
    "NVIDIA Corporation (NVDA)": "NVDA",
    "Visa Inc. (V)": "V",
    "JPMorgan Chase & Co. (JPM)": "JPM",
    "PayPal Holdings, Inc. (PYPL)": "PYPL",
    "Intel Corporation (INTC)": "INTC",
    "Cisco Systems, Inc. (CSCO)": "CSCO",
    "Netflix, Inc. (NFLX)": "NFLX",
    "Goldman Sachs Group, Inc. (GS)": "GS",
    "International Business Machines Corporation (IBM)": "IBM",
    "Walmart Inc. (WMT)": "WMT",
    "The Walt Disney Company (DIS)": "DIS",
    "The Boeing Company (BA)": "BA",
    "Exxon Mobil Corporation (XOM)": "XOM",
    "General Electric Company (GE)": "GE",
    "Agilent Technologies, Inc. (AAP)": "AAP",
    "Advanced Micro Devices, Inc. (AMD)": "AMD",
    "Uber Technologies, Inc. (UBER)": "UBER",
    "Lyft, Inc. (LYFT)": "LYFT",
    "AT&T Inc. (T)": "T"
}

options_stock = list(stocks_data.keys())
selected_stock_name = st.selectbox("Select a Stock:", options_stock)
selected_stock_ticker = stocks_data[selected_stock_name]

# Choose the Crypto

crypto_data = {
    "Bitcoin (BTC)": "X:BTCUSD",
    "Ethereum (ETH)": "X:ETHUSD",
    "Binance Coin (BNB)": "X:BNBUSD",
    "Cardano (ADA)": "X:ADAUSD",
    "Solana (SOL)": "X:SOLUSD",
    "XRP (XRP)": "X:XRPUSD",
    # "Polkadot (DOT)": "DOT",
    # "Dogecoin (DOGE)": "DOGE",
    # "Avalanche (AVAX)": "AVAX",
    # "Chainlink (LINK)": "LINK",
    # "Litecoin (LTC)": "LTC",
    # "Bitcoin Cash (BCH)": "BCH",
    # "Stellar (XLM)": "XLM",
    # "Polygon (MATIC)": "MATIC",
    # "VeChain (VET)": "VET",
    # "Theta (THETA)": "THETA",
    # "Uniswap (UNI)": "UNI",
    # "Cosmos (ATOM)": "ATOM",
    # "Tezos (XTZ)": "XTZ",
    # "EOS (EOS)": "EOS",
    # "Tron (TRX)": "TRX",
    # "Cardano (ADA)": "ADA",
    # "IOTA (IOTA)": "IOTA",
    # "Neo (NEO)": "NEO",
    # "Monero (XMR)": "XMR"
}

options_crypto = list(crypto_data.keys())
selected_crypto_name = st.selectbox("Select a Cryptocurrency:", options_crypto)
selected_crypto_ticker = crypto_data[selected_crypto_name]

# Chose the Data Range

start_date = st.date_input("Start date:", date.today(), key="date_picker1")
end_date = st.date_input("End date:", date.today(), key="date_picker2")

# Choose the amount of money

amount = st.slider("How many money invest in $?", min_value=100, max_value=1000, value=250, step=50)

# Get the Data 

client = RESTClient(api_key="ivZzORZgwRUh111oi0qOsGj4pKbiSoYG")

def get_data():
    stock_aggs = []
    for a in client.list_aggs(ticker=selected_stock_ticker, multiplier=1, timespan="week", from_=start_date, to=end_date, limit=1000):
        stock_aggs.append(a)

    crypto_aggs = []
    for a in client.list_aggs(ticker=selected_crypto_ticker, multiplier=1, timespan="week", from_=start_date, to=end_date, limit=1000):
        crypto_aggs.append(a)
    
    return stock_aggs, crypto_aggs

# Button to trigger API call
if st.button("Generate Results"):
    with st.spinner("Fetching data..."):
        # Perform API call and get the data
        stock_data, crypto_data = get_data()
    
    # Display the Stock Data
    
    st.subheader("Stock Data")
    df_stock = pd.DataFrame(stock_data)

    df_stock['ratio'] = df_stock['close'] / df_stock['close'].shift(1)
    df_stock['ratio'].iloc[0] = 1

    df_stock['investment_evolution'] = amount * df_stock['ratio'].cumprod()

    plt.plot(df_stock['close'], label='Close', color='blue')
    plt.plot(df_stock['high'], label='High', linestyle='dotted', color='green')
    plt.plot(df_stock['low'], label='Low', linestyle='dotted', color='red')
    plt.xlabel('Time (weekly)')
    plt.ylabel('Price ($)')
    plt.title(f'{selected_stock_name} Price Analysis')
    plt.legend()
    st.pyplot()
    # st.dataframe(df_stock)

    # Display the Crypto Data

    st.subheader("Crypto Data")
    df_crypto = pd.DataFrame(crypto_data)

    df_crypto['ratio'] = df_crypto['close'] / df_crypto['close'].shift(1)
    df_crypto['ratio'].iloc[0] = 1

    df_crypto['investment_evolution'] = amount * df_crypto['ratio'].cumprod()

    plt.plot(df_crypto['close'], label='Close', color='blue')
    plt.plot(df_crypto['high'], label='High', linestyle='dotted', color='green')
    plt.plot(df_crypto['low'], label='Low', linestyle='dotted', color='red')
    plt.xlabel('Time (weekly)')
    plt.ylabel('Price ($)')
    plt.title(f'{selected_crypto_name} Price Analysis')
    plt.legend()
    st.pyplot()
    # st.dataframe(crypto_data)

    # Display the result of the comparaison
    
    st.subheader('Equity VS Crypto Returns')
    plt.plot(df_stock['investment_evolution'], marker='o', linestyle='-', color='blue',label=selected_stock_name)
    plt.plot(df_crypto['investment_evolution'], marker='o', linestyle='-', color='yellow', label=selected_crypto_name)
    plt.xlabel('Time (weekly)')
    plt.ylabel('Investment Evolution ($)')
    plt.title('Investment Evolution Over Weeks')
    plt.legend()
    st.pyplot()

    result_text = f"""
    Invested amount: {amount}$
    Equity / Crypto: {selected_stock_name} / {selected_crypto_name}
    Start date: {start_date}
    End date: {end_date}
    Final Portofolio Value: {round(df_stock['investment_evolution'].iloc[-1],2)}$ / {round(df_crypto['investment_evolution'].iloc[-1],2)}$
    """
    st.text(result_text)



