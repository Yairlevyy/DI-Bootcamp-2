# Exercise 1

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"{self.amount} {self.currency}s"
    
#     def __int__(self):
#         return self.amount
    
#     def __repr__(self):
#         return f"{self.amount} {self.currency}"
    
#     def __add__(self,other):
#         if not self.currency == other.currency:
#             raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#         else:
#             return self.amount + other.amount
        
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# Exercise 2

# import func

# func.add(3,9)

# Exercise 3

# import string
# import random

# all_letters = string.ascii_letters
# random_str = ''
# for i in range(0,5):
#     random_num = random.randint(0,len(all_letters))
#     random_str += all_letters[random_num]
# print(random_str)

# Exercise 4

# from datetime import datetime

# def display_date():
#     print(datetime.now().date())

# display_date()

# Exercise 5

# from datetime import datetime

# def get_time_until_one_one():
#     current_data = datetime.now()
#     target_date = datetime(2024, 1, 1)
#     time_left = target_date - current_data

#     print(f"The 1st of January is in {time_left}hours")

# get_time_until_one_one()

# Exercise 6

# from datetime import datetime,timedelta

# def get_minutes():
#     current_data = datetime.now()
#     target_date = datetime(2003, 5, 22)
#     times = current_data - target_date
#     minutes = (times.days*24*60) + (times.seconds/60)
#     print(f"Until now, it's {int(minutes)} minutes.")

# Exercise 7

# from faker import Faker
# import random

# fake = Faker()

# print(fake.name())

# users = []

# for i in range(0,15):
#     new_user = {
#     "name":fake.name(),
#     "adress":fake.address(),
#     "langage_code":random.choice(fake.locales)
#     }
#     users.append(new_user)

# print(users)