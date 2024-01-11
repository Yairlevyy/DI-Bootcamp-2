import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

starbucks = pd.read_csv('starbucks.csv')
# print(starbucks.head(10))
# total_entries = starbucks.shape[0]
# print(total_entries)
print(starbucks.columns)
# print(starbucks.index)
# print(starbucks.groupby('Beverage')[' Sugars (g)'].mean().round(2).sort_values(ascending=False))
# # Java Chip (Without Whipped Cream) -> 62.44g
# print(starbucks['Beverage'].nunique())
# print(starbucks['Beverage_category'].value_counts())
# # Classic Espresso Drinks              58
# # Tazo® Tea Drinks                     52
# # Signature Espresso Drinks            40
# # Frappuccino® Blended Coffee          36
# # Shaken Iced Beverages                18
# print(starbucks.groupby('Beverage_category')['Calories'].mean().round(2))
# starbucks['Caffeine (mg)'] = pd.to_numeric(starbucks['Caffeine (mg)'], errors='coerce')
# starbucks['caffeine_to_calories'] = starbucks['Caffeine (mg)'] / starbucks['Calories']
# starbucks['caffeine_to_calories'] = starbucks['caffeine_to_calories'].round(2)
# print(starbucks)
# print(starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean().round(2).sort_values(ascending=False))
# # Coffee -> 67.83
# avg_ratios = starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean()
# plt.barh(avg_ratios.index, avg_ratios)
# plt.xlabel('Average Caffeine to Calories Ratio')
# plt.ylabel('Beverage Category')
# plt.title('Average Caffeine to Calories Ratio by Beverage Category')
# plt.show()
"What is the relationship between cholesterol and the sugar ?"
plt.plot(starbucks['Cholesterol (mg)'], starbucks[' Sugars (g)'], marker='o', linestyle='-')
plt.xlabel('Cholesterol')
plt.ylabel('Sugars')
plt.title('Relationship between Cholesterol and Sugars')
plt.show()
"We clearly see that it's proportional, as the amount of sugar went up the cholesterol too."