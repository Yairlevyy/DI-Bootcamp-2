from django.db import models
import random

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True,unique=True)
    username = models.CharField(max_length=255,unique=True)
    email = models.EmailField(unique=True)
    amount_of_money = models.DecimalField(max_digits=10,decimal_places=2, default=1000)
    points = models.IntegerField(default=0)

class Card(models.Model):
    id = models.AutoField(primary_key=True,unique=True)
    name_character = models.CharField(max_length=255)
    species = models.CharField(max_length=255)
    house = models.CharField(max_length=255)
    image_url = models.URLField()
    date_of_birth = models.DateField(null=True)
    patronus = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=random.uniform(200, 2000))
    xp_points = models.IntegerField(default=random.randint(1, 10))
    current_owner = models.ForeignKey(User, related_name='wizard_current_owner', null=True, on_delete=models.SET_NULL)
    previous_owner = models.ForeignKey(User, related_name='wizard_previous_owner', null=True, on_delete=models.SET_NULL)