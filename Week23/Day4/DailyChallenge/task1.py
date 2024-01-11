import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 

x = np.linspace(0,20,100)
y = x**2
plt.title("Plot of x vs y (y=x^2)")
plt.xlabel('x')
plt.xlim(0,20)
plt.ylabel('y')
plt.ylim(0,400)
plt.plot(x,y)
plt.savefig('My_fig.png')
plt.show()
