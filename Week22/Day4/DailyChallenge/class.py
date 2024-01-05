# Exercise 1

# def word_frequency(input_str):
#     my_dict = {}
#     input_list = input_str.split()
#     for word in input_list:
#         my_dict[word] = my_dict.get(word, 0) + 1
#     return my_dict

# input_str = "apple orange apple banana orange apple"
# result = word_frequency(input_str)
# print(result)

# Exercise 2

# def longest_unique_substring(s):
#     length = 0
#     str_list = []
#     for char in s:
#         if char not in str_list:
#             length += 1
#             str_list.append(char)
#         else:
#             return length

# s = "abcfrtytabcbb"
# result = longest_unique_substring(s)
# print(result)
