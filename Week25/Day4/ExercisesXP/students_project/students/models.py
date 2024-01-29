from django.db import models
from django.utils import timezone

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    date_joined = models.DateTimeField(default=timezone.now, editable=False)

