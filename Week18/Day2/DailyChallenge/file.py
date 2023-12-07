user_str = input('Please enter a string with 10 chars: ')
if len(user_str) < 10:
    print('string not long enough')
elif len(user_str) > 10:
    print('string too long')
else:
    print('perfect string')
    print(f"This is the first char: {user_str[0]}")
    print(f"This is the last char: {user_str[-1]}")

counter = 1

for letter in user_str:
    print(user_str[:counter])
    counter += 1

