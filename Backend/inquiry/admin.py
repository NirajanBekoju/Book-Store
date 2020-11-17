from django.contrib import admin
from .models import Inquiry

# Register your models here.
class InquiryAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'email', 'book_id', 'payment_method')
    list_display_links = ('id', 'name')
    list_filter = ('payment_method', )
    search_fields = ('name', 'email', 'book_id')
    list_per_page = 30

admin.site.register(Inquiry, InquiryAdmin)