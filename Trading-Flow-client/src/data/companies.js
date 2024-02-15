const data_companies = [
  {
    "company_name": "NVIDIA",
    "company_ticker": "NVDA",
    "company_logo": "https://companieslogo.com/img/orig/NVDA-220e1e03.png?t=1633073585"
  },
  {
    "company_name": "Tesla",
    "company_ticker": "TSLA",
    "company_logo": "https://companieslogo.com/img/orig/TSLA-6da550e5.png?t=1633074393"
  },
  {
    "company_name": "Advanced Micro Devices",
    "company_ticker": "AMD",
    "company_logo": "https://companieslogo.com/img/orig/AMD-ee5b4684.png?t=1632720791"
  },
  {
    "company_name": "Microsoft",
    "company_ticker": "MSFT",
    "company_logo": "https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277"
  },
  {
    "company_name": "Amazon.com",
    "company_ticker": "AMZN",
    "company_logo": "https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695"
  },
  {
    "company_name": "Apple",
    "company_ticker": "AAPL",
    "company_logo": "https://companieslogo.com/img/orig/AAPL-bf1a4314.png?t=1701573172"
  },
  {
    "company_name": "Meta Platforms",
    "company_ticker": "META",
    "company_logo": "https://companieslogo.com/img/orig/META-4767da84.png?t=1654568366"
  },
  {
    "company_name": "Alphabet",
    "company_ticker": "GOOG",
    "company_logo": "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
  },
  {
    "company_name": "QUALCOMM",
    "company_ticker": "QCOM",
    "company_logo": "https://companieslogo.com/img/orig/QCOM-515e1eda.png?t=1659278709"
  },
  {
    "company_name": "Broadcom",
    "company_ticker": "AVGO",
    "company_logo": "https://companieslogo.com/img/orig/AVGO-ceb477a4.png?t=1654488680"
  },
  {
    "company_name": "Boeing",
    "company_ticker": "BA",
    "company_logo": "https://companieslogo.com/img/orig/BA-fb24e03c.png?t=1633224568"
  },
  {
    "company_name": "UnitedHealth Group",
    "company_ticker": "UNH",
    "company_logo": "https://companieslogo.com/img/orig/UNH-7de2d8cd.png?t=1633357348"
  },
  {
    "company_name": "Exxon Mobil",
    "company_ticker": "XOM",
    "company_logo": "https://companieslogo.com/img/orig/XOM-52f55a13.png?t=1633217102"
  },
  {
    "company_name": "Visa",
    "company_ticker": "V",
    "company_logo": "https://companieslogo.com/img/orig/V-05214186.png?t=1633206554"
  },
  {
    "company_name": "Bank of America",
    "company_ticker": "BAC",
    "company_logo": "https://companieslogo.com/img/orig/BAC-e7995069.png?t=1633208020"
  },
  {
    "company_name": "Netflix",
    "company_ticker": "NFLX",
    "company_logo": "https://companieslogo.com/img/orig/NFLX-7466b597.png?t=1633074945"
  },
  {
    "company_name": "Intel",
    "company_ticker": "INTC",
    "company_logo": "https://companieslogo.com/img/orig/INTC-12074943.png?t=1633221777"
  },
  {
    "company_name": "Eli Lilly and Company",
    "company_ticker": "LLY",
    "company_logo": "https://companieslogo.com/img/orig/LLY-a89a5a37.png?t=1633215703"
  },
  {
    "company_name": "JP Morgan Chase & Co.",
    "company_ticker": "JPM",
    "company_logo": "https://companieslogo.com/img/orig/JPM-6b337108.png?t=1654673332"
  },
  {
    "company_name": "Honeywell International",
    "company_ticker": "HON",
    "company_logo": "https://companieslogo.com/img/orig/HON-04eb977f.png?t=1647981072"
  },
  {
    "company_name": "Mastercard",
    "company_ticker": "MA",
    "company_logo": "https://companieslogo.com/img/orig/MA-c8ce4564.png?t=1647961845"
  },
  {
    "company_name": "Merck & Company",
    "company_ticker": "MRK",
    "company_logo": "https://companieslogo.com/img/orig/MRK-7f8ec2c5.png?t=1633439530"
  },
  {
    "company_name": "Pfizer",
    "company_ticker": "PFE",
    "company_logo": "https://companieslogo.com/img/orig/PFE-749aeae5.png?t=1701259705"
  },
  {
    "company_name": "Costco Wholesale",
    "company_ticker": "COST",
    "company_logo": "https://companieslogo.com/img/orig/COST-180a6d1f.png?t=1633439405"
  },
  {
    "company_name": "Starbucks",
    "company_ticker": "SBUX",
    "company_logo": "https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1633439375"
  },
  {
    "company_name": "Align Technology",
    "company_ticker": "ALGN",
    "company_logo": "https://companieslogo.com/img/orig/ALGN-a3ee8a3d.png?t=1681965711"
  },
  {
    "company_name": "Wells Fargo & Company",
    "company_ticker": "WFC",
    "company_logo": "https://companieslogo.com/img/orig/WFC-a4743c33.png?t=1633439489"
  },
  {
    "company_name": "AT&T",
    "company_ticker": "T",
    "company_logo": "https://companieslogo.com/img/orig/T-cec8a3f9.png?t=1633439494"
  },
  {
    "company_name": "Johnson & Johnson",
    "company_ticker": "JNJ",
    "company_logo": "https://companieslogo.com/img/orig/JNJ-5579062e.png?t=1698397492"
  },
  {
    "company_name": "Amgen",
    "company_ticker": "AMGN",
    "company_logo": "https://companieslogo.com/img/orig/AMGN-10e15ed0.png?t=1704445259"
  },
  {
    "company_name": "Procter & Gamble",
    "company_ticker": "PG",
    "company_logo": "https://companieslogo.com/img/orig/PG-b828a7df.png?t=1633215329"
  },
  {
    "company_name": "Chevron",
    "company_ticker": "CVX",
    "company_logo": "https://companieslogo.com/img/orig/CVX-92486b6f.png?t=1660262485"
  },
  {
    "company_name": "Marathon Digital Holdings",
    "company_ticker": "MARA",
    "company_logo": "https://companieslogo.com/img/orig/MARA-e9f776e1.png?t=1632719871"
  },
  {
    "company_name": "Thermo Fisher Scientific",
    "company_ticker": "TMO",
    "company_logo": "https://companieslogo.com/img/orig/TMO-dd47efaa.png?t=1647960155"
  },
  {
    "company_name": "Citigroup",
    "company_ticker": "C",
    "company_logo": "https://companieslogo.com/img/orig/C-9c2e2afb.png?t=1681964498"
  },
  {
    "company_name": "Nextracker",
    "company_ticker": "NXT",
    "company_logo": "https://companieslogo.com/img/orig/NXT-024f4c2b.png?t=1676278956"
  },
  {
    "company_name": "Walmart",
    "company_ticker": "WMT",
    "company_logo": "https://companieslogo.com/img/orig/WMT-0d8ecd74.png?t=1633217525"
  },
  {
    "company_name": "Humana",
    "company_ticker": "HUM",
    "company_logo": "https://companieslogo.com/img/orig/HUM-db1a00aa.png?t=1635272432"
  },
  {
    "company_name": "Coinbase Global",
    "company_ticker": "COIN",
    "company_logo": "https://companieslogo.com/img/orig/COIN-a63dbab3.png?t=1648737284"
  },
  {
    "company_name": "Shopify",
    "company_ticker": "SHOP",
    "company_logo": "https://companieslogo.com/img/orig/SHOP-020ea41a.png?t=1633439432"
  },
  {
    "company_name": "Adobe",
    "company_ticker": "ADBE",
    "company_logo": "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1700710868"
  },
  {
    "company_name": "Texas Instruments",
    "company_ticker": "TXN",
    "company_logo": "https://companieslogo.com/img/orig/TXN-e197f953.png?t=1633439481"
  },
  {
    "company_name": "Cisco Systems",
    "company_ticker": "CSCO",
    "company_logo": "https://companieslogo.com/img/orig/CSCO-187e9f61.png?t=1633217347"
  },
  {
    "company_name": "Norfolk Southern",
    "company_ticker": "NSC",
    "company_logo": "https://companieslogo.com/img/orig/NSC-edb4d6a9.png?t=1635007218"
  },
  {
    "company_name": "McDonald's",
    "company_ticker": "MCD",
    "company_logo": "https://companieslogo.com/img/orig/MCD-4fd8e96f.png?t=1647435923"
  },
  {
    "company_name": "Royal Caribbean Cruises",
    "company_ticker": "RCL",
    "company_logo": "https://companieslogo.com/img/orig/RCL-8028a7c6.png?t=1648337174"
  },
  {
    "company_name": "Etsy",
    "company_ticker": "ETSY",
    "company_logo": "https://companieslogo.com/img/orig/ETSY-9d318ad7.png?t=1648741074"
  },
  {
    "company_name": "Bristol-Myers Squibb",
    "company_ticker": "BMY",
    "company_logo": "https://companieslogo.com/img/orig/BMY-03bb5df8.png?t=1633224743"
  },
  {
    "company_name": "Caterpillar",
    "company_ticker": "CAT",
    "company_logo": "https://companieslogo.com/img/orig/CAT-bb6413e4.png?t=1634013656"
  },
  {
    "company_name": "General Electric",
    "company_ticker": "GE",
    "company_logo": "https://companieslogo.com/img/orig/GE-0f5d8584.png?t=1647981255"
  },
  {
    "company_name": "General Motors",
    "company_ticker": "GM",
    "company_logo": "https://companieslogo.com/img/orig/GM-7169314a.png?t=1634009946"
  },
  {
    "company_name": "Lockheed Martin",
    "company_ticker": "LMT",
    "company_logo": "https://companieslogo.com/img/orig/LMT-db3de619.png?t=1647951659"
  },
  {
    "company_name": "Verizon Communications",
    "company_ticker": "VZ",
    "company_logo": "https://companieslogo.com/img/orig/VZ-13e34d8e.png?t=1633209373"
  },
  {
    "company_name": "Delta Air Lines",
    "company_ticker": "DAL",
    "company_logo": "https://companieslogo.com/img/orig/DAL-3ea1d23b.png?t=1648913453"
  },
  {
    "company_name": "Coca-Cola",
    "company_ticker": "KO",
    "company_logo": "https://companieslogo.com/img/orig/KO-b23a2a5e.png?t=1684129869"
  },
  {
    "company_name": "IBM",
    "company_ticker": "IBM",
    "company_logo": "https://companieslogo.com/img/orig/IBM-57502b16.png?t=1669436923"
  },
  {
    "company_name": "Ford Motor",
    "company_ticker": "F",
    "company_logo": "https://companieslogo.com/img/orig/F-4cbb5d30.png?t=1647436107"
  },
  {
    "company_name": "PepsiCo",
    "company_ticker": "PEP",
    "company_logo": "https://companieslogo.com/img/orig/PEP-a33c9cf1.png?t=1633439508"
  },
  {
    "company_name": "AstraZeneca PLC",
    "company_ticker": "AZN",
    "company_logo": "https://companieslogo.com/img/orig/AZN-0bec0f28.png?t=1633439513"
  },
  {
    "company_name": "Goldman Sachs Group",
    "company_ticker": "GS",
    "company_logo": "https://companieslogo.com/img/orig/GS-71003e9a.png?t=1647980990"
  },
  {
    "company_name": "T-Mobile US",
    "company_ticker": "TMUS",
    "company_logo": "https://companieslogo.com/img/orig/TMUS-c281226a.png?t=1633439389"
  },
  {
    "company_name": "Salesforce.com",
    "company_ticker": "CRM",
    "company_logo": "https://companieslogo.com/img/orig/CRM-74b365dd.png?t=1633216760"
  },
  {
    "company_name": "American Express",
    "company_ticker": "AXP",
    "company_logo": "https://companieslogo.com/img/orig/AXP-630b1f5e.png?t=1633439435"
  },
  {
    "company_name": "FedEx",
    "company_ticker": "FDX",
    "company_logo": "https://companieslogo.com/img/orig/FDX-35c19ad4.png?t=1648042471"
  },
  {
    "company_name": "Carnival",
    "company_ticker": "CCL",
    "company_logo": "https://companieslogo.com/img/orig/CCL-a806b4d3.png?t=1686872920"
  },
  {
    "company_name": "Marriott International",
    "company_ticker": "MAR",
    "company_logo": "https://companieslogo.com/img/orig/MAR-5124f716.png?t=1648283604"
  },
  {
    "company_name": "Morgan Stanley",
    "company_ticker": "MS",
    "company_logo": "https://companieslogo.com/img/orig/MS-285b3c2c.png?t=1632523065"
  },
  {
    "company_name": "Union Pacific",
    "company_ticker": "UNP",
    "company_logo": "https://companieslogo.com/img/orig/UNP-f9f889b9.png?t=1633497115"
  },
  {
    "company_name": "Moderna",
    "company_ticker": "MRNA",
    "company_logo": "https://companieslogo.com/img/orig/MRNA-723e7c1a.png?t=1633496905"
  },
  {
    "company_name": "Raytheon Technologies",
    "company_ticker": "RTX",
    "company_logo": "https://companieslogo.com/img/orig/RTX-0ad52297.png?t=1633225000"
  },
  {
    "company_name": "CME Group",
    "company_ticker": "CME",
    "company_logo": "https://companieslogo.com/img/orig/CME-ce2f32ad.png?t=1648651025"
  },
  {
    "company_name": "Applied Materials",
    "company_ticker": "AMAT",
    "company_logo": "https://companieslogo.com/img/orig/AMAT-a2114cab.png?t=1633625318"
  },
  {
    "company_name": "Comcast",
    "company_ticker": "CMCSA",
    "company_logo": "https://companieslogo.com/img/orig/CMCSA-6309c0ab.png?t=1633216905"
  },
  {
    "company_name": "S&P Global",
    "company_ticker": "SPGI",
    "company_logo": "https://companieslogo.com/img/orig/SPGI-23d836fa.png?t=1651808338"
  },
  {
    "company_name": "Becton, Dickinson and Company",
    "company_ticker": "BDX",
    "company_logo": "https://companieslogo.com/img/orig/BDX-cb35179f.png?t=1648189770"
  },
  {
    "company_name": "Abbott Laboratories",
    "company_ticker": "ABT",
    "company_logo": "https://companieslogo.com/img/orig/ABT-c8b5d792.png?t=1633439504"
  },
  {
    "company_name": "BlackRock",
    "company_ticker": "BLK",
    "company_logo": "https://companieslogo.com/img/orig/BLK-c62bf4b8.png?t=1649698104"
  },
  {
    "company_name": "Gilead Sciences",
    "company_ticker": "GILD",
    "company_logo": "https://companieslogo.com/img/orig/GILD-3c480bbb.png?t=1647893715"
  },
  {
    "company_name": "Charles River Laboratories International",
    "company_ticker": "CRL",
    "company_logo": "https://companieslogo.com/img/orig/CRL-187bf0d4.png?t=1597610284"
  },
  {
    "company_name": "Colgate-Palmolive",
    "company_ticker": "CL",
    "company_logo": "https://companieslogo.com/img/orig/CL-a39d8cf4.png?t=1647968468"
  },
  {
    "company_name": "Dell Technologies",
    "company_ticker": "DELL",
    "company_logo": "https://companieslogo.com/img/orig/DELL-f7f7f0be.png?t=1634108492"
  },
  {
    "company_name": "Deere & Company",
    "company_ticker": "DE",
    "company_logo": "https://companieslogo.com/img/orig/DE-0fca2708.png?t=1660586001"
  },
  {
    "company_name": "Dow",
    "company_ticker": "DOW",
    "company_logo": "https://companieslogo.com/img/orig/DOW-2c6cad56.png?t=1648914941"
  },
  {
    "company_name": "EMCOR Group",
    "company_ticker": "EME",
    "company_logo": "https://companieslogo.com/img/orig/EME-5e47c516.png?t=1695102346"
  },
  {
    "company_name": "Emerson Electric",
    "company_ticker": "EMR",
    "company_logo": "https://companieslogo.com/img/orig/EMR-d0841a47.png?t=1654489947"
  },
  {
    "company_name": "Fidelity National Information Services",
    "company_ticker": "FIS",
    "company_logo": "https://companieslogo.com/img/orig/FIS-5ab45a72.png?t=1634115331"
  },
  {
    "company_name": "General Dynamics",
    "company_ticker": "GD",
    "company_logo": "https://companieslogo.com/img/orig/GD-28d1f36f.png?t=1648284001"
  },
  {
    "company_name": "Halliburton Company",
    "company_ticker": "HAL",
    "company_logo": "https://companieslogo.com/img/orig/HAL-9c9f5e6b.png?t=1688377934"
  },
  {
    "company_name": "International Business Machines",
    "company_ticker": "IBM",
    "company_logo": "https://companieslogo.com/img/orig/IBM-57502b16.png?t=1669436923"
  },
  {
    "company_name": "JPMorgan Chase & Co.",
    "company_ticker": "JPM",
    "company_logo": "https://companieslogo.com/img/orig/JPM-6b337108.png?t=1654673332"
  },
  {
    "company_name": "Kraft Heinz",
    "company_ticker": "KHC",
    "company_logo": "https://companieslogo.com/img/orig/KHC-77f2e0d3.png?t=1634120976"
  },
  {
    "company_name": "Marathon Petroleum",
    "company_ticker": "MPC",
    "company_logo": "https://companieslogo.com/img/orig/MPC-e9499e2f.png?t=1648467941"
  },
  {
    "company_name": "Medtronic plc",
    "company_ticker": "MDT",
    "company_logo": "https://companieslogo.com/img/orig/MDT-8ea4f5f3.png?t=1633439417"
  },
  {
    "company_name": "Merck & Co.",
    "company_ticker": "MRK",
    "company_logo": "https://companieslogo.com/img/orig/MRK-7f8ec2c5.png?t=1633439530"
  },
  {
    "company_name": "MetLife",
    "company_ticker": "MET",
    "company_logo": "https://companieslogo.com/img/orig/MET-d9ef9e6b.png?t=1648156508"
  },
  {
    "company_name": "Nasdaq",
    "company_ticker": "NDAQ",
    "company_logo": "https://companieslogo.com/img/orig/NDAQ-1a768cf8.png?t=1647436666"
  },
  {
    "company_name": "Newmont",
    "company_ticker": "NEM",
    "company_logo": "https://companieslogo.com/img/orig/NEM-9b518837.png?t=1637461027"
  },
  {
    "company_name": "Nike",
    "company_ticker": "NKE",
    "company_logo": "https://companieslogo.com/img/orig/NKE-0c8add60.png?t=1632522146"
  },
  {
    "company_name": "Oracle",
    "company_ticker": "ORCL",
    "company_logo": "https://companieslogo.com/img/orig/ORCL-d5a587ae.png?t=1633210264"
  },
  {
    "company_name": "Philip Morris International",
    "company_ticker": "PM",
    "company_logo": "https://companieslogo.com/img/orig/PM-9b5fa1ae.png?t=1678353966"
  },
  {
    "company_name": "Schlumberger",
    "company_ticker": "SLB",
    "company_logo": "https://companieslogo.com/img/orig/SLB-66cc2dd9.png?t=1671247166"
  },
  {
    "company_name": "Sempra Energy",
    "company_ticker": "SRE",
    "company_logo": "https://companieslogo.com/img/orig/SRE-d42e9b3e.png?t=1648157284"
  },
  {
    "company_name": "Southern Company",
    "company_ticker": "SO",
    "company_logo": "https://companieslogo.com/img/orig/SO-bc44012c.png?t=1648042002"
  },
  {
    "company_name": "Target",
    "company_ticker": "TGT",
    "company_logo": "https://companieslogo.com/img/orig/TGT-72eb9761.png?t=1633514069"
  },
  {
    "company_name": "The Home Depot",
    "company_ticker": "HD",
    "company_logo": "https://companieslogo.com/img/orig/HD-c2e64c95.png?t=1633215944"
  },
  {
    "company_name": "The Travelers Companies",
    "company_ticker": "TRV",
    "company_logo": "https://companieslogo.com/img/orig/TRV-08fde93c.png?t=1648751911"
  },
  {
    "company_name": "The Walt Disney Company",
    "company_ticker": "DIS",
    "company_logo": "https://companieslogo.com/img/orig/DIS-b016b22b.png?t=1632964183"
  },
  {
    "company_name": "The Williams Companies",
    "company_ticker": "WMB",
    "company_logo": "https://companieslogo.com/img/orig/WMB-89c51e33.png?t=1648407030"
  },
  {
    "company_name": "Truist Financial",
    "company_ticker": "TFC",
    "company_logo": "https://companieslogo.com/img/orig/TFC-10ef6fac.png?t=1634045116"
  },
  {
    "company_name": "Tyson Foods",
    "company_ticker": "TSN",
    "company_logo": "https://companieslogo.com/img/orig/TSN-13bd5433.png?t=1648751038"
  },
  {
    "company_name": "United Parcel Service",
    "company_ticker": "UPS",
    "company_logo": "https://companieslogo.com/img/orig/UPS-2d269781.png?t=1633439421"
  },
  {
    "company_name": "United Technologies",
    "company_ticker": "UTX",
    "company_logo": "https://companieslogo.com/img/orig/UTX-96a63df8.png?t=1593494448"
  },
  {
    "company_name": "Vivint Smart Home",
    "company_ticker": "VVNT",
    "company_logo": "https://companieslogo.com/img/orig/VVNT-0f307dcb.png?t=1632510434"
  },
  {
    "company_name": "Waste Management",
    "company_ticker": "WM",
    "company_logo": "https://companieslogo.com/img/orig/WM-c6b6879b.png?t=1647860833"
  },
  {
    "company_name": "Western Digital",
    "company_ticker": "WDC",
    "company_logo": "https://companieslogo.com/img/orig/WDC-e128135f.png?t=1660028557"
  },
  {
    "company_name": "World Fuel Services",
    "company_ticker": "INT",
    "company_logo": "https://companieslogo.com/img/orig/INT-d8819a2e.png?t=1660121029"
  },
  {
    "company_name": "Wynn Resorts",
    "company_ticker": "WYNN",
    "company_logo": "https://companieslogo.com/img/orig/WYNN-58d73650.png?t=1651593399"
  },
  {
    "company_name": "Xcel Energy",
    "company_ticker": "XEL",
    "company_logo": "https://companieslogo.com/img/orig/XEL-20561a33.png?t=1648742281"
  },
  {
    "company_name": "Xerox Holdings",
    "company_ticker": "XRX",
    "company_logo": "https://companieslogo.com/img/orig/XRX-af627342.png?t=1660023404"
  },
  {
    "company_name": "Xilinx",
    "company_ticker": "XLNX",
    "company_logo": "https://companieslogo.com/img/orig/XLNX-e61d7a44.png?t=1594300542"
  },
  {
    "company_name": "Yum! Brands",
    "company_ticker": "YUM",
    "company_logo": "https://companieslogo.com/img/orig/YUM-3e0453d9.png?t=1648284766"
  },
  {
    "company_name": "Zebra Technologies",
    "company_ticker": "ZBRA",
    "company_logo": "https://companieslogo.com/img/orig/ZBRA-e0de829b.png?t=1647839766"
  },
  {
    "company_name": "Zimmer Biomet Holdings",
    "company_ticker": "ZBH",
    "company_logo": "https://companieslogo.com/img/orig/ZBH-01f28fb9.png?t=1647979824"
  }
]

export default data_companies