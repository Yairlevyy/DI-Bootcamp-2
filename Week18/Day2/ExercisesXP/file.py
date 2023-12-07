# Exercise 1

# >>> 5 < 3 : False
# >>> 3 == 3 : True
# >>> 3 == "3" : False
# >>> "3" > 3 : Error, cannot compare string and int.
# >>> "Hello" == "hello" : False


# Exercise 2

# name = 'Yair'
# age = 20
# shoe_size = 44
# info = f'My name is {name}, i am {age} and my shoe size is {shoe_size}'

# print(info)


# Exercise 3

# num = int(input('Enter a number please: '))

# if num % 2 == 0:
#     print(f'{num} is an even number')
# else:
#     print(f'{num} is an odd number')


# Exercise 4

# height = float(input('Please enter your height in inches: '))
# if height * 2.54 > 145:
#     print('You are tall enough to ride, welcome!')
# else:
#     print('Sorry, you need to grow more to ride!')


# Exercise 5

# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
# print(len(my_text))


# Exercise 6

# user_input = input('Please enter the longest word you can without the letter A: ')
# if "a" in user_input.lower():
#     print('Sorry, this sentence include an A.')
# else:
#     print('Congrats!')


# Exercise 7

# my_fav_numbers = {5,18,22,26}
# print(my_fav_numbers)
# my_fav_numbers.add(30)
# my_fav_numbers.add(50)
# print(my_fav_numbers)
# my_fav_numbers.remove(50)
# friend_fav_numbers = {3,6,13,27,39}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)


# Exercise 8

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# print(basket)
# basket.remove("Banana")
# print(basket)
# basket.append("Kiwi")
# print(basket)
# basket.insert(0,"Apples")
# print(basket)
# print(basket.count("Apples"))
# basket.clear()
# print(basket)


# Exercise 9

# 1. Float are used to store decimal numbers
# 2. sequence_of_floats = [float(i) for i in range(2, 11)]
# 3. sequence = [1.5 + 0.5 * i for i in range(8)]


# Exercise 10

# for i in range(1,21):
#     print(i)

# for i in range(2,21,2):
#     print(i)


# Exercise 11

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