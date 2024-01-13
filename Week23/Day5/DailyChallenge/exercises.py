import pandas as pd 
import numpy as np 
import matplotlib.pyplot as plt

titanic = pd.read_csv('titanic.csv')
print(titanic.columns)
# print(titanic.head(3))
# print(titanic.describe())
# print(titanic.info())

# type_counts = titanic['Sex'].value_counts()
# print(type_counts)
# plt.pie(type_counts, labels=type_counts.index, autopct='%1.1f%%', startangle=90, colors=['blue', 'pink'])
# plt.show()

# plt.hist(titanic['Age'],bins=10,edgecolor='black',color='blue')
# plt.xlabel('Age')
# plt.ylabel('Frequency')
# plt.title('Passenger Age Distribution')
# plt.show()

# lives_counts = titanic['Survived'].value_counts()
# print(lives_counts)
# plt.bar(lives_counts.index,lives_counts,color=['red', 'green'])
# plt.xlabel('Survived')
# plt.ylabel('Count')
# plt.title('Survival Distribution')
# plt.xticks([0, 1], ['Not Survived', 'Survived'])
# plt.show()

# survival_counts = titanic.groupby(['Sex', 'Survived']).size().unstack(fill_value=0)
# print(survival_counts)
# survival_counts.plot(kind='bar', stacked=True, color=['red', 'green'])
# plt.xlabel('Gender')
# plt.ylabel('Count')
# plt.title('Survival by Gender')
# plt.xticks(rotation=0)
# plt.legend(['Not Survived', 'Survived'], loc='upper right')
# plt.show()

# plt.scatter(titanic['Age'],titanic['Fare'],color='blue',alpha=0.7)
# plt.xlabel('Age')
# plt.ylabel('Fare')
# plt.title('Correlation between Fare and Age')
# plt.show()

# mean_age = titanic['Age'].mean()
# titanic['Age'].fillna(mean_age,inplace=True)

# min_fare = titanic['Fare'].min()
# max_fare = titanic['Fare'].max()

# titanic['Fare'] = (titanic['Fare'] - min_fare) / (max_fare - min_fare)

titanic_encoded = pd.get_dummies(titanic, columns=['Sex'], prefix='Sex')

survival_rate_by_gender = titanic.groupby('Sex')['Survived'].mean()
print(survival_rate_by_gender)

survival_rate_by_class = titanic.groupby('Pclass')['Survived'].mean()
print(survival_rate_by_class)

max_fare_index = titanic['Fare'].idxmax()

# Print all rows with the highest fare
rows_with_highest_fare = titanic.loc[titanic['Fare'] == titanic.loc[max_fare_index, 'Fare']]
print(rows_with_highest_fare)

