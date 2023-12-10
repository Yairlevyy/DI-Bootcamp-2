# Challenge 1

# user_word = input('Please enter a word: ')

# my_dict = {}

# for letter in user_word:
#     my_dict.update({letter:[index for index,char in enumerate(user_word) if char==letter]})

# print(my_dict)

# Challenge 2

# can_be_afford = []

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = 300

# for item in items_purchase:
#     price = int(items_purchase[item].replace(",", "").replace("$", ""))
#     if price <= wallet:
#         can_be_afford.append(item)
#         wallet -= price

# sorted_list = sorted(can_be_afford)

# print(sorted_list)