from game import Game

def get_user_menu_choice():
    print("Menu:")
    print("(g) Play a new game")
    print("(x) Show scores and exit")
    user_input = input(" : ")
    return user_input

def print_results(results):
    print("Game Results:")
    print(f"You won {results['win']} times")
    print(f"You lost {results['loss']} times")
    print(f"You drew {results['draw']} times")
    print("Thank you for playing!")

def main():
    user_choice = get_user_menu_choice()
    results = {"win":0,"loss":0,"draw":0}
    while user_choice == "g":
        new_game = Game()
        game_result = new_game.play()
        if game_result == "win":
            results["win"] += 1
        elif game_result == "loss":
            results["loss"] += 1
        else:
            results["draw"] += 1
        user_choice = get_user_menu_choice()
    print_results(results)

main()