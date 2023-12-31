class Text:
    def __init__(self,str):
        self.str = str
        self.list_str = str.lower().split(" ")

    def get_frequency(self,word):
        word_count = self.list_str.count(word.lower())
        if word_count == 0:
            return None
        else:
            return {"sentence":f"The word {word} appears {word_count} in the sentence.","count":word_count}
        
    def get_most_common_word(self):
        word_dict = {}
        for word in self.list_str:
            word_frequency_obj = self.get_frequency(word)
            word_frequency = word_frequency_obj["count"]
            word_dict[word] = word_frequency
        print(word_dict)
        most_frequent_word = max(word_dict, key=word_dict.get)
        return most_frequent_word
    
    def get_unique_word(self):
        unique_word = []
        for word in self.list_str:
            frequency_obj = self.get_frequency(word)
            frequency = frequency_obj["count"]
            if frequency == 1:
                unique_word.append(word)
        return unique_word

    @staticmethod
    def from_file(path):
        with open(path,"r") as f:
            lines = f.readlines()
            sentence = " ".join(lines).strip()
            return Text(sentence)
        
new_instance = Text.from_file('the_stranger.txt')
print(new_instance.get_unique_word())
