import matplotlib.pyplot as plt
import numpy as np

# Exercise 2

# x = [1, 2, 3, 4, 5]  # Prices
# y = [5, 4, 3, 2, 1]  # Demand

# plt.plot(x,y)
# plt.show()

# Exercise 3

# x = [1, 2, 3, 4, 5]  # Age
# y = [75, 80, 88, 95, 105]  # Height in cm

# plt.scatter(x,y)
# plt.show()

# Exercise 4

# x = [1, 2, 3, 4, 5]  # Prices
# y = [5, 4, 3, 2, 1]  # Demand

# plt.plot(x,y)
# plt.title('Product Demand vs Price')
# plt.xlabel('Price')
# plt.ylabel('Demand')
# plt.savefig('my_plot.png')
# plt.show()

# Exercise 5

# x = [1, 2, 3, 4, 5]  # Age
# y = [75, 80, 88, 95, 105]  # Height in cm

# plt.scatter(x,y)
# plt.title('Children’s Height vs Age')
# plt.xlabel('Age (years)')
# plt.ylabel('Height (cm)')
# plt.savefig('my_plot_2.png')
# plt.show()

# Exercise 7

x = np.linspace(-10, 10, 1000)
y1 = np.sin(x)
y2 = np.cos(x)

# plt.plot(x,y1,color='blue')
# plt.show()

# plt.scatter(x,y2,marker='*')
# plt.show()

# Exercise 8

# fig,axes = plt.subplots(2,1)
# axes[0].plot(x,y1)
# axes[1].scatter(x,y2)
# plt.tight_layout()
# plt.show()

# Exercise 9

# fig,axes = plt.subplots(2,1)
# axes[0].plot(x,y1,label='Sin')
# axes[1].scatter(x,y2,label='Cos')
# plt.tight_layout()
# axes[0].legend()
# axes[1].legend()
# plt.show()

# Exercise 10

# grades = [88, 90, 95, 92, 88, 90, 88, 85, 93, 92, 90, 87, 95, 90, 88]
# plt.hist(grades)
# plt.show()