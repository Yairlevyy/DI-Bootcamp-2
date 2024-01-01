from menu_items import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print("Please choose what you want to do:")
    print("View an Item (V)")
    print("Add an Item (A)")
    print("Delete an Item (D)")
    print("Update an Item (U)")
    print("Show the Menu (S)")
    user_input = input('Your choice: ').lower()
    if user_input == "v":
        view_item()
    elif user_input == "a":
        add_item_to_menu()
    elif user_input == "d":
        remove_item_from_menu()
    elif user_input == "u":
        update_item_from_menu()
    elif user_input == "s":
        show_user_menu()

def add_item_to_menu():
    item_name = input("Please enter the name of the product: ")
    item_price = int(input("Please enter the price of the product: "))
    new_item = MenuItem(item_name,item_price)
    print("Item was added successfully!")

def remove_item_from_menu():
    item_name = input("Please enter the name of the product: ")
    new_item = MenuItem(item_name)
    new_item.delete()
    print("Item was deleted successfully!")  

def update_item_from_menu():
    item_name = input("Please enter the name of the product: ")
    item_price = int(input("Please enter the price of the product: "))
    new_item_name = input("Please enter the new name of the product: ")
    new_item_price = int(input("Please enter the new price of the product: "))
    new_item = MenuItem(item_name,item_price)
    new_item.update(new_item_name,new_item_price)
    print("Item was updated successfully!")

def show_restaurant_menu():
    items = MenuManager.all_items()
    for item in items:
        print(item)

def view_item():
    item_name = input("Please enter the name of the product: ")
    item = MenuManager.get_by_name(item_name)
    print(item)
