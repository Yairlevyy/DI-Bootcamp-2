from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, MinLengthValidator
from django.contrib.auth.models import User  # Import the User model

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200, blank=False)
    author = models.CharField(max_length=255, blank=False)
    published_date = models.DateField(blank=False)
    description = models.TextField(blank=False)
    page_count = models.PositiveIntegerField()
    categories = models.CharField(max_length=255)
    thumbnail_url = models.URLField()

    def __str__(self):
        return self.title

class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE,blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE,blank=False)
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    review_text = models.TextField(blank=False,validators=[MinLengthValidator(10)])

    def __str__(self):
        return f"Review for {self.book.title} by {self.user.username}"
    
