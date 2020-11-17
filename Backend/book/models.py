from django.db import models
from django.utils.timezone import now

# Create your models here.
class Book(models.Model):
    class BookCategory(models.TextChoices):
        Physics = 'Physics'
        Art = 'Art'
        Politics = 'Politics'
        Music = 'Music'
        Electronics = 'Electronics'
        Mathematics = 'Mathematics'
        Geography = 'Geography'
        History = 'History'
        Other = 'Other'

    title = models.CharField(max_length=50, unique=True, blank=False)
    author = models.CharField(max_length=50, blank=False)
    category = models.CharField(
        max_length=20, 
        choices=BookCategory.choices, 
        default=BookCategory.Other,
        blank=False
        )
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=False)
    description = models.TextField(blank=False)
    price = models.IntegerField(blank=False)
    is_published = models.BooleanField(default=True)
    created_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title
    

