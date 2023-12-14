# Challenge 1

# def sort_str():
#     input_user = input("Please enter a sentence: ")
#     word_list = input_user.split(", ")
#     word_list.sort()
#     joined_str = word_list.join(", ")
#     print(joined_str)

# sort_str()

# Option 2

# def sort_words(input_string):
#     sorted_words = sorted([word for word in input_string.split(',')])
#     return ', '.join(sorted_words)

# def sort_str():
#     input_user = input("Please enter a sentence: ")
#     joined_str = sort_words(input_user)
#     print(joined_str)

# sort_str()

# Challenge 2

def longest_word():
    user_str = input("Please enter a sentence: ")
    max_len = 0
    longest_word = ''
    for word in user_str.split(' '):
        if len(word) > max_len:
            longest_word = word
    print(word)

longest_word()
