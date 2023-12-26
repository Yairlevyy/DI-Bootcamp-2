import random

class Card:
    def __init__(self,suit,value):
        self.card_data = {"suit": suit, "value": value}

    def __str__(self):
        return f"{self.card_data['value']} of {self.card_data['suit']}"

card = Card("Hearts",8) 

class Deck:
    def __init__(self):
        self.cards = []

    def build_deck(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        for suit in suits:
            for value in values:
                card = Card(suit,value)
                self.cards.append(card)

    def shuffle(self):
        random.shuffle(self.cards)

    def is_empty(self):
        return len(self.cards) == 0
    
    def deal(self):
        if not self.is_empty():
            random_number = random.randint(0,len(self.cards))
            dealt_card = self.cards.pop(random_number)
            print(f"Card : {dealt_card}")
        else:
            print("You finish to dealt all the cards!")

new_party = Deck()
new_party.build_deck()
new_party.shuffle()
new_party.deal()
new_party.deal()
new_party.deal()