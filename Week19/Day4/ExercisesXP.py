# Exercise 1

# import random

# def get_random_temp(season):
#     if season == "winter":
#         return random.randint(-10,0)
#     elif season == "autumn":
#         return random.randint(0,10)
#     elif season == "spring":
#         return random.randint(10,20)
#     elif season == "summer":
#         return random.randint(20,30)

# def main():
#     season = input('Please choose a season: ')
#     temp = get_random_temp(season)
#     print(f'The temperature right now is {temp} degrees Celsius.')
#     if temp < 0:
#         print('Brrr, that’s freezing! Wear some extra layers today')
#     elif 0 < temp < 16:
#         print('Quite chilly! Don’t forget your coat')
#     elif 16 < temp < 23:
#         print('Summer is coming!')
#     elif 24 < temp < 32:
#         print("Let's go to the swimming pool!")
#     else:
#         print("We need to buy an AC!")

# main()

# Exercise 2

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# def ask_user(data):
#     score = 0
#     wrong_answers = []
#     for index,value in enumerate(data):
#         ask_user = input(value["question"])
#         if ask_user.lower() == value["answer"].lower():
#             score += 1
#         else:
#             wrong_answers.append({
#                 "question":value["question"],
#                 "answer":value["answer"],
#                 "your_answer":ask_user
#             })
#     inform_user(score,wrong_answers)

# def inform_user(score,wrong_answers):
#     print(f'You have {score} correct answer(s).')
#     if score < 2:
#         print("Your score is too low, let's try again!")
#         ask_user(data)

# ask_user(data)

# Exercise 3

# def get_age(year, month, day):
#     current_year = 2023
#     current_month = 12
#     age = 0
#     if month >= current_month:
#         age = current_year - year
#     else:
#         age = current_year - 1 - year
#     return age

# def can_retire():
#     user_input = input("Enter a date (DD/MM/YYYY): ")
#     day, month, year = user_input.split('/')
#     gender = input('Enter your gender: ')
#     age = int(get_age(year,month,day))
#     if month >= 4 and year >= 1947:
#         if gender == "male":
#             if age >= 67:
#                 return True
#             else:
#                 return False
#         else:
#             if age >= 62:
#                 return True
#             else:
#                 return False

# def display_msg():
#     status = can_retire()
#     if status:
#         print('You can retire! Mazal Tov!')
#     else:
#         print("You can't retire! Go back to work...")

# display_msg()

# Exercise 4

# def display_num(x):
#     two = int(str(x) * 2)
#     three = int(str(x) * 3)
#     four = int(str(x) * 4)
#     num_list = [x]
#     for i in range(2,5):
#         num_list.append(int(str(x) * i))
#     print(num_list)
#     return sum(num_list)

# display_num(3)

