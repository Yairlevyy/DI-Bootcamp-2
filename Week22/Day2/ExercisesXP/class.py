# Exercise 1

# Snippet 1: O(1)
# Snippet 2: O(n²)
# Snippet 3: O(log n)

# Exercise 2

# numbers = [5, 2, 9, 1, 5, 6]

# def insertion_sort(numbers):
#    for i in range (1,len(numbers)):
#       prev_index = i-1
#       act_index = i
#       while prev_index >= 0 and numbers[prev_index] > numbers[act_index]:
#         numbers[prev_index],numbers[act_index] = numbers[act_index],numbers[prev_index]
#         prev_index -= 1
#         act_index -= 1

# insertion_sort(numbers) 
# print(numbers)

# Exercise 3

# numbers = [1, 3, 5, 7, 9, 11]

# def binary_search(numbers: list, value: int):
#     low = 0
#     high = len(numbers) - 1

#     while low <= high:
#         mid = (low + high) // 2

#         if numbers[mid] == value:
#             return mid  
#         elif numbers[mid] < value:
#             low = mid + 1
#         else:
#             high = mid - 1

#     return -1


# index = binary_search(numbers, 7) # returns 3
# print(index)
