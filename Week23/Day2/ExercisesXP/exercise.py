import pandas as pd
import numpy as np

# Exercise 1

chipo = pd.read_csv('chipotle.tsv.txt', sep='\t')
# print(chipo.head(10))
# print("Rows:",chipo.shape[0])
# print("Columns:",chipo.shape[1])
# print(list(chipo.columns))
# print(chipo.index)
# print("Most ordered item:",chipo["item_name"].value_counts().idxmax())
# print("Total items:",chipo["quantity"].sum())
# print("Most ordered item from choice description:",chipo["choice_description"].value_counts().idxmax())
chipo['item_price'] = chipo['item_price'].apply(lambda x: float(x.replace('$', '')))
# revenue = chipo['item_price'].sum()
# print("Revenue:",f"{revenue}$")
# orders = chipo["order_id"].nunique()
# print("Total number of orders:",orders)
# print("Average order value:", f"{round(revenue/orders,2)}$")
# print("Total number of unique items sold:",chipo["item_name"].nunique())

# Exercise 2

# expensive_products = chipo[chipo['item_price'] > 10]
# print(f"There is {len(expensive_products)} items that cost more than 10$.")

# Exercise 3

# users = pd.read_csv('user.txt', sep='|')
# grouped = users.groupby('occupation')['age'].mean()
# print(round(grouped))

# Exercise 4

# data1 = pd.DataFrame({
#     "ID": np.arange(1, 6),
#     "Name": ['Alice', 'Bob', 'Charlie', 'David', 'Emma']
# })

# data2 = pd.DataFrame({
#     "ID": np.arange(6, 9),
#     "Name": ['Frank', 'Grace', 'Hank']
# })

# data3 = pd.DataFrame({
#     "ID":np.arange(1,9),
#     "Score":np.linspace(0, 100, 8,dtype=int)
# })

# all_data = pd.concat([data1,data2])
# print(all_data)
# all_data_col = pd.concat([data1,data2],axis=1)
# print(all_data_col)

# Exercise 5

# iris_columns = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'species']
# iris = pd.read_csv('iris.txt', sep=',',header=None,names=iris_columns)
# print(iris)
# print(iris.isnull())

# Exercise 6

# data = {'evolution': ['Ivysaur', 'Charmeleon', 'Wartortle', 'Metapod'],
#     'hp': [45, 39, 44, 45],
#     'name': ['Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie'],
#     'pokedex': ['yes', 'no', 'yes', 'no'],
#     'type': ['grass', 'fire', 'water', 'bug']}

# df = pd.DataFrame(data)
# print(df)
# print("*"*50)
# df = df.reindex(columns=["name","type","hp","evolution","pokedex"])
# print(df)

# Exercise 7

# baby_names = pd.read_csv('baby_names.csv')
# print(baby_names.head(10))
# baby_names.drop(columns=['Unnamed: 0','Id'],axis=1,inplace=True)
# print(baby_names.head(10))

# Exercise 8

# temperature = [30, 31, 29, 32, 33, 34, 28, 27, 25, 35]
# humidity = [80, 75, 70, 85, 90, 80, 75, 60, 65, 70]
# wind_speed = [5, 6, 7, 8, 9, 4, 10, 5, 6, 7]

# date_rng = pd.date_range('2021-01-01','2021-01-10',freq='D')

# weather_data = pd.DataFrame({'Date': date_rng, 'Temperature': temperature, 'Humidity': humidity, 'Wind Speed': wind_speed})

# frequency = pd.infer_freq(date_rng)
# print(f"The frequency of the dataset is {frequency}")

# weather_data.set_index('Date',inplace=True)
# print(weather_data)

