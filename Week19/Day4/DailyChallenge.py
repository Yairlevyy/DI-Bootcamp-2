def compute():
    return 5 / 0

try:
    result = compute()
    print(result)
except ZeroDivisionError as error:
    print(f'Error: {error}')