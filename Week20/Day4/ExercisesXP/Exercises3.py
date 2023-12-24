from exercises import Dog
import random

class PetDog(Dog):
    def __init__(self,name,age,weight,trained=False):
        super().__init__(name,age,weight)
        self.trained = trained

    def train(self):
        self.trained = True
        self.bark()

    def play(self,*args):
        print(f'{", ".join(map(str,args))} all play together')

    def do_a_trick(self):
        sentences = [" does a barrel roll"," stands on his back legs"," shakes your hand"," plays dead"]
        if self.trained:
            rand_num = random.randint(0,3)
            print({self.name} + sentences[rand_num])
            