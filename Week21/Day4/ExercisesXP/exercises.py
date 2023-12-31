# Exercise 1
# import random 

# def get_words_from_file():
#     with open("word_list.txt","r") as f:
#         lines = f.readlines()
#     return lines

# def get_random_sentence(length):
#     words_list = get_words_from_file()
#     random_words = []
#     for i in range(0,length):
#         random_number = random.randint(0, len(words_list))
#         random_word = words_list[random_number].strip()
#         random_words.append(random_word)
#     sentence = ' '.join(random_words)
#     sentence_lower = sentence.lower()
#     return sentence_lower

# def main():
#     print("We create random sentence of a length of your choice!")
#     try:
#         user_input = int(input("Please enter a number between 2 and 20: "))
#         sentence = get_random_sentence(user_input)
#         print(sentence)
#     except:
#         print("Please enter a valid number!")
#         main()

# main()

# Exercise 2

import json

sampleJson = { 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}

salary = sampleJson["company"]["employee"]["payable"]["salary"]
print(salary)

sampleJson["company"]["employee"]["birth_date"] = "22 May"

print(sampleJson)

with open('my_file.json',"w") as f:
    json.dump(sampleJson,f,indent=2)
