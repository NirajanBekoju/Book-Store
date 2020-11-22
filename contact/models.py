from django.db import models
from django.utils import timezone

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=20, null=False)
    email = models.EmailField(max_length=50, null=False)
    message = models.TextField(null=False)
    aggrement = models.BooleanField(default=False)
    contact_date = models.DateTimeField(default=timezone.now, blank=True)

    def __str__(self):
        return self.name
