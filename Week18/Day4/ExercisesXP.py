# Exercise 1

# my_fav_numbers = {12,33,45,87}
# my_fav_numbers.add(18)
# my_fav_numbers.add(39)
# my_fav_numbers.remove(39)
# friend_fav_numbers = {4,56,23,89}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Exercise 2

# No, a tuple is unmutable type of data, you can't change it, like a const in js.

# Exercise 3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0,"Apples")
# count_of_apples = basket.count("Apples")
# basket.clear()
# print(basket)

# Exercise 4

# A float is a number with decimal points, an int is a whole number whitout decimal point. 

# Exercise 5

# for i in range(1,21):
#     print(i)

# for i in range(0,21,2):
#     print(i)

# Exercise 6

# input_user = input("Please enter your name: ")
# while input_user != 'yair':
#     input_user = input("Please enter your name: ")

# Exercise 7

# input_user = input("Please enter your favorite fruit(s) : ")
# input_user_list = input_user.split()
# new_input_user = input("Please enter a fruit : ")
# if new_input_user in input_user_list:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")    

# Exercise 8

# active = True
# toppings = []

# while active:
#     user_input = input('Enter a series of pizza toppings, to stop write quit: ')
#     print(f'We will add {user_input} to your pizza') 
#     toppings.append(user_input)
#     if user_input == 'quit':
#         active = False

# for topping in toppings:
#     print(topping)

# total_price = 10 + 2.5 * len(toppings)

# print(f"The total price is {total_price}")

# Exercise 9

# Way 1 to store age:
# mom_age = int(input('Please enter your age: '))
# dad_age = int(input('Please enter your age: '))
# bro_age = int(input('Please enter your age: '))
# sis_age = int(input('Please enter your age: '))
# family_age = [mom_age,dad_age,bro_age,sis_age]

# Way 2 to store age:
# family_member = int(input('How many people there is in the family? '))
# family_age = []
# for i in range(0,family_member):
#     age = int(input('Please enter your age: '))
#     family_age.append(age)

# total_cost = []

# for age in family_age:
#     if age < 3:
#         total_cost.append(0)
#     elif 3 <= age < 12:
#         total_cost.append(10)
#     else:
#         total_cost.append(15)

# total_cost_sum = sum(total_cost)
# print(f"The total cost will be {total_cost_sum} dollars")

# names = ["David","Tal","Or","Ilay"]
# eligible_names = []

# for name in names:
#     age = int(input(f'{name}, what"s your age? '))
#     if 16 < age < 21:
#         eligible_names.append(name)

# print(eligible_names)

# Exercise 10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(sandwich_orders)

finished_sandwiches = []

for order in sandwich_orders:
    finished_sandwiches.append(order)

sandwich_orders.clear()

print(finished_sandwiches)

for sandwich in finished_sandwiches: 
    print(f'I made your {sandwich}')
