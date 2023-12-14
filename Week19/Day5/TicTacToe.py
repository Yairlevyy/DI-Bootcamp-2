print("Welcome to TIC TAC TOE!")

def display_board(dict):
    print("*"*17)
    for i in range(0,10,2):
        if i == 2 or i == 6:
            print("*  ---|---|---  *")
        elif i == 0:
            print(f"*   {dict['1-1']} | {dict['1-2']} | {dict['1-3']}   *")
        elif i == 4:
            print(f"*   {dict['2-1']} | {dict['2-2']} | {dict['2-3']}   *")
        elif i == 8:
            print(f"*   {dict['3-1']} | {dict['3-2']} | {dict['3-3']}   *")
    print("*"*17)   

def player_input():
    my_dict = {
        "1-1": " ",
        "1-2": " ",
        "1-3": " ",
        "2-1": " ",
        "2-2": " ",
        "2-3": " ",
        "3-1": " ",
        "3-2": " ",
        "3-3": " "
    }

    display_board(my_dict)

    active = True
    count = 0
    count_case = 1

    while active:
        if count == 0:
            input_x_row = input('(x) Please, enter a Row: ')
            input_x_column = input('(x) Please, enter a Column: ')
            my_dict[f"{input_x_row}-{input_x_column}"] = "x"
            display_board(my_dict)
            count_case += 1
            if check_status(my_dict) or count_case == 9:
                active = False
            count += 1
        else:
            input_o_row = input('(o) Please, enter a Row: ')
            input_o_column = input('(o) Please, enter a Column: ')
            my_dict[f"{input_o_row}-{input_o_column}"] = "o"
            display_board(my_dict)
            count_case += 1
            if check_status(my_dict) or count_case == 9:
                active = False
            count -= 1
    
    print("The game is finish!")

def check_status(my_dict):
    winning_combinations = [
        ("1-1", "1-2", "1-3"),
        ("2-1", "2-2", "2-3"),
        ("3-1", "3-2", "3-3"),
        ("1-1", "2-2", "3-3"),
        ("1-3", "2-2", "3-1")
    ]

    for combo in winning_combinations:
        if my_dict[combo[0]] != ' ' and my_dict[combo[1]] != ' ' and my_dict[combo[2]] != ' ':
            if my_dict[combo[0]] == my_dict[combo[1]] == my_dict[combo[2]]:
                return True

    return False

player_input()