# Exercise 1

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat_one = Cat("Cat One",3)
# cat_two = Cat("Cat Two",7)
# cat_three = Cat("Cat Three",9)

# cat_list = [cat_one,cat_two,cat_three]

# def find_oldest_cat(data):
#     oldest_cat_age = 0
#     oldest_cat_index = 0
#     for index,cat in enumerate(data):
#         if cat.age > oldest_cat_age:
#             oldest_cat_age = cat.age
#             oldest_cat_index = index
#     return {"name":data[index].name,"age":data[index].age}

# oldest_cat_infos = find_oldest_cat(cat_list)
# print(f"The oldest cat is {oldest_cat_infos['name']}, and is {oldest_cat_infos['age']} years old.")

# Exercise 2

# class Dog:
#     def __init__(self,name,height):
#         self.name = name
#         self.height = height 

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height * 2}cm high!")

# davids_dog = Dog("Rex",50)
# print(f"His name it's {davids_dog.name} and he is {davids_dog.height}")
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup",20)
# print(f"His name it's {sarahs_dog.name} and he is {sarahs_dog.height}")
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print("David's dog is bigger than Sarah's dog")
# else:
#     print("Sarah's dog is bigger than David's dog")  

# Exercise 3

# class Song:
#     def __init__(self,lyrics):
#         self.lyrics = lyrics
    
#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)
    
# stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

# stairway.sing_me_a_song()

# Exercise 4

# from collections import defaultdict

# class Zoo:
#     def __init__(self,zoo_name):
#         self.animals = []
#         self.name = zoo_name
    
#     def add_animal(self,animal):
#         if animal not in self.animals:
#             self.animals.append(animal)
    
#     def get_animals(self):
#         for animal in self.animals:
#             print(animal)
    
#     def sell_animal(self,animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)

#     def sort_animals(self):
#         sorted_list = sorted(self.animals)
#         list_dict = {}
#         actual_letter = ''
#         actual_index = 1

#         for animal in sorted_list:
#             if actual_index == 1 and actual_letter == '' :
#                 actual_letter = animal[0].lower()
#             else:
#                 if animal[0].lower() == actual_letter:
#                     list_dict[str(actual_index)] = []
#                     list_dict[str(actual_index)].append(animal)
#                 elif not animal[0].lower() == actual_letter:
#                     actual_letter = animal[0].lower()
#                     actual_index += 1
#                     list_dict[str(actual_index)] = []
            
#             list_dict[str(actual_index)] = [animal]  # Add the last group of animals
        
#         print(list_dict)

#     def get_groups(self):
#         for key,value in self.dict_animals.items():
#             for animal in value:
#                 print(animal)

# ramat_gan_safari = Zoo("Ramat Gan Safari")

# ramat_gan_safari.add_animal("Lion")
# ramat_gan_safari.add_animal("Tiger")
# ramat_gan_safari.add_animal("Giraffe")

# print("Current animals in the zoo:")
# ramat_gan_safari.get_animals()

# ramat_gan_safari.sell_animal("Lion")

# print("\nAfter selling an animal:")
# ramat_gan_safari.get_animals()

# ramat_gan_safari.sort_animals()

# print("\nGroups of animals:")
# ramat_gan_safari.get_groups()


    

        