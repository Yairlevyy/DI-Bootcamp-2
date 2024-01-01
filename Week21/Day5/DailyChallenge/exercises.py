import psycopg2
import requests

connection = psycopg2.connect(
    host="trumpet.db.elephantsql.com",
    database="kicsbbhb",
    user="kicsbbhb",
    password="JXcQ78Ffy6s8Ispu_oO85tXznzS803Q8"
)

cursor = connection.cursor()

res = requests.get("https://restcountries.com/v3.1/all")
data = res.json()
for i in range(0,10):
    name = data[i]['name']['common']
    capital = data[i]['capital'][0]
    flag = data[i]['flags']['png']
    subregion = data[i]['subregion']
    population = data[i]['population']
    try:
        data_to_insert = (name,capital,flag,subregion,population)
        query = "INSERT INTO countries (name,capital,flag,subregion,population) VALUES (%s,%s,%s,%s,%s)"
        cursor.execute(query, data_to_insert)
        connection.commit()
        print(f"{name} was added successfully!")
    except Exception as err:
        print("error=>", err)
        connection.rollback()

