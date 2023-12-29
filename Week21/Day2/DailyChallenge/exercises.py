import math

class Circle:
    def __init__(self,radius):
        self.radius = int(radius)
        self.diameter = int(radius) * 2

    @property
    def area(self):
        return math.pi * self.radius**2
    
    def __str__(self):
        area = self.get_area()
        return f"The radius of the circle is {self.radius} and his area is {area}"
    
    def __add__(self,other):
        new_radius = self.radius + other.radius
        return Circle(new_radius)
    
    def __gt__(self,other):
        return self.radius > other.radius
    
    def __eq__(self,other):
        return self.radius == other.radius
    
    def __lt__(self,other):
        return self.radius < other.radius
    
    
    

    

    


