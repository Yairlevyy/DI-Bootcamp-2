try:
    num1 = int(input("Please enter the first num to divide: "))
    num2 = int(input("Please enter the second num to divide: "))
    print(num1/num2)
except ZeroDivisionError as error:
    print(f'Error: {error}')

