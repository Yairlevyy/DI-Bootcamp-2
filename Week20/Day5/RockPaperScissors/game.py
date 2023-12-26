import random

class Game:
    def __init__(self):
        self.choices = ["r","p","s"]
        self.rules = {
            ("r", "s"): "win",
            ("s", "p"): "win",
            ("p", "r"): "win",
            ("s", "r"): "loss",
            ("p", "s"): "loss",
            ("r", "p"): "loss",
        }

    def get_user_item(self):
        user_input = input("Select (r)ock,(p)aper,(s)cissors: ")
        while user_input not in ["r","p","s"]:
            user_input = input("Invalid input. Select (r)ock,(p)aper,(s)cissors: ")
        return user_input
    
    def get_computer_item(self):
        computer_choice = random.choice(self.choices)
        return computer_choice
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item,computer_item) in self.rules:
            return self.rules[(user_item,computer_item)]
        
    def get_choice_name(self,choice):
        if choice == "r":
            return "rock"
        elif choice == "s":
            return "scissors"
        else:
            return "paper"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        game_result = self.get_game_result(user_item, computer_item)
        user_state = "win"
        if game_result == "loss":
            user_state = "lose"
        elif game_result == "draw":
            user_state = "drew"
        user_item = self.get_choice_name(user_item)
        computer_item = self.get_choice_name(computer_item)
        print(f"You selected {user_item}. The computer selected {computer_item}. You {user_state}")
        return game_result
    
