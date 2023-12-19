class Farm:
    def __init__(self,farm_name):
        self.farm_name = farm_name
        self.animals = {}
    
    def add_animal(self,animal_type,number=1):
        if animal_type not in self.animals:
            self.animals[animal_type] = number
        else:
            self.animals[animal_type] += number
    
    def get_info(self):
        print(f"{self.farm_name}'s farm")
        for key,value in self.animals.items():
            print(f"{key} : {value}")

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()
    