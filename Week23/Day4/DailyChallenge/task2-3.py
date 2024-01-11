import pandas as pd 
import matplotlib.pyplot as plt 

chipo = pd.read_csv("chipo.txt",delimiter='\t')
chipo["item_price"] = chipo["item_price"].apply(lambda x: float(x.replace('$','')))

# x = chipo['item_price']
# y = chipo["quantity"]
# plt.scatter(x,y)
# plt.title('Relationship between item price and quantity ordered')
# plt.xlabel('item price')
# plt.ylabel('quantity ordered')
# plt.savefig('My_fig_two.png')
# plt.show()

# Task 3

new_df = chipo.groupby('item_name')['quantity'].sum()
top5 = new_df.sort_values(ascending=False).head(5)
plt.bar(top5.index, top5.values, color='blue')
plt.xticks(rotation=45, ha='right')
plt.xlabel('Item Name')
plt.ylabel('Total Quantity Ordered')
plt.title('Top 5 Items by Quantity Ordered')
plt.savefig('My_fig_3.png')
plt.show()
