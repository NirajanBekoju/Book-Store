from django.db import models
from django.utils.timezone import now
from book.models import Book

class Inquiry(models.Model):
    class PaymentMethod(models.TextChoices):
        cash = 'Cash'
        esewa = 'Esewa'
        connectIPS = 'ConnectIPS'
        khalti = 'Khalti'
    
    name = models.CharField(max_length=50, null=False)
    email = models.EmailField(max_length=50, null=False)
    book_id = models.ForeignKey(Book, on_delete=models.DO_NOTHING, null=False)
    message = models.TextField(blank=True)
    payment_method = models.CharField(
        max_length=20, 
        choices=PaymentMethod.choices, 
        default=PaymentMethod.cash,
        null=False
        )
    


