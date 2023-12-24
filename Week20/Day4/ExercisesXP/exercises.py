# Exercise 1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# bengal_cat = Bengal('Benga',7)
# chartreux_cat = Chartreux('Chart',3)
# siamese_cat = Siamese('Siam',6)

# all_cats = [bengal_cat,chartreux_cat,siamese_cat]

# sara_pets = Pets(all_cats)
# sara_pets.walk()

# Exercise 2

# class Dog:
#     def __init__(self,name,age,weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         print(f"{self.name} is barking")
    
#     def run_speed(self):
#         return self.weight/self.age*10
    
#     def fight(self,other_dog):
#         actual_dog_px = int(self.run_speed()) * int(self.weight)
#         other_dog_px = int(other_dog.run_speed()) * int(other_dog.weight)
#         if actual_dog_px > other_dog_px:
#             print(f'{self.name} is the winner with {actual_dog_px}Px!')
#         else:
#             print(f'{other_dog.name} is the winner with {other_dog_px}Px!')

# dog_one = Dog('Dogy',10,35)
# dog_two = Dog('Dogyy',14,45)
# dog_three = Dog('Dogyyy',16,48)

# dog_one.fight(dog_two)

# Exercise 4

class Family:
    def __init__(self,members,last_name):
        self.members = members
        self.last_name = last_name

    def born(self,**kwargs):
        self.members.append(kwargs)
    
    def is_18(self,person_name):
        for person in self.members:
            if person["name"] == person_name:
                if person["age"] >= 18:
                    return True
                else:
                    return False
    
    def family_presentation(self):
        print(f"This is the {self.last_name} Family!")
        for person in self.members:
            print(f"{person['name']} {self.last_name} is {person['age']} years old.")
    
# family_list =     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]

# the_family = Family(family_list,"Israel")
# the_family.family_presentation()
# the_family.born(name="Leah",age=20,gender="Female",is_child=False)
# the_family.family_presentation()
# if the_family.is_18("Sarah"):
#     print("Congrats! You are more than 18yo!")
# else:
#     print("Sorry, you are to young...")

# Exercise 5

class TheIncredibles(Family):
    def use_power(self,person_name):
        if self.is_18(person_name):
            for person in self.members:
                if person["name"] == person_name:
                    print(person["power"])
        else:
            raise ValueError("Member is not over 18 years old")
        
    def incredible_presentation(self):
        print("*Here is our powerful family *")
        self.family_presentation()

incredible_list =     [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
incredible_family = TheIncredibles(incredible_list,'Incredibles')

incredible_family.incredible_presentation()

incredible_family.born(name='Jack',age=2,gender='Male',is_child='True',power='Unknown Power',incredible_name='BabyFly')

incredible_family.incredible_presentation()

