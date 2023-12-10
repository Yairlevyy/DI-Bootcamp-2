# Exercise 1

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# zipped_data = zip(keys,values)
# my_dict = dict(zipped_data)

# print(my_dict)

# Exercise 2

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0

# for member in family:
#     if family[member] < 3:
#         print(f"{member} have to pay 0$.")
#     elif 3 <= family[member] < 12:
#         print(f"{member} have to pay 10$.")
#         total_cost += 10
#     else:
#         print(f"{member} have to pay 15$.")
#         total_cost += 15

# print(f"The total cost is {total_cost}$.")

# Exercise 3

# brand_dict = {
#     'name':'Zara',
#     'creation_date': 1975,
#     'creator_name': 'Amancio Ortega Gaona',
#     'type_of_clothes': ['men', 'women', 'children', 'home'],
#     'international_competitors': ['Gap', 'H&M', 'Benetton'],
#     'number_stores':7000,
#     'major_color':{
#         'France':'blue',
#         'Spain':'red',
#         'US':['pink','red']
#     }
# }

# brand_dict['number_stores'] = 2

# print(f"The main clients of {brand_dict['name']} are {brand_dict['type_of_clothes'][0]}, {brand_dict['type_of_clothes'][1]} and {brand_dict['type_of_clothes'][2]}.")

# brand_dict['country_creation'] = 'Spain'

# if 'international_competitors' in brand_dict:
#     brand_dict['international_competitors'].append('Desigual')

# print(brand_dict)

# del brand_dict['creation_date']

# print(brand_dict['international_competitors'][-1])

# for color in brand_dict['major_color']['US']:
#     print(color)

# print(len(brand_dict))

# for key in brand_dict:
#     print(key)

# more_on_zara = {
#     'creation_date': 1975,
#     'number_stores': 10000
# }

# brand_dict.update(more_on_zara)

# print(brand_dict['number_stores'])

# Exercise 4

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

#1/

# disney_users_A = {}
# count = 0
# for user in users:
#     disney_users_A.update({user:count})
#     count += 1


# print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

#2/

# disney_users_B = {}
# count = 0
# for user in users:
#     disney_users_B.update({count:user})
#     count += 1

# print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

#3/ 

# sorted_list = sorted(users)
# disney_users_C = {}
# count = 0

# for user in sorted_list:
#     disney_users_C.update({user:count})
#     count += 1

# print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

#4.1

# disney_users_A_B = {}
# count = 0

# for user in users:
#     if "i" in user:
#         disney_users_A_B.update({user:count})
#         count += 1

# print(disney_users_A_B)

#4.1

# disney_users_A_C = {}
# count = 0

# for user in users:
#     if user[0].lower() == "m" or user[0].lower() == "p":
#         disney_users_A_C.update({user:count})
#         count += 1

# print(disney_users_A_C)


