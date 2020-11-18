from django.contrib import admin
from .models import Book

# Register your models here.
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'price', 'is_featured', 'is_published', 'created_date')
    list_display_links = ('id', 'title')
    list_filter = ('is_published', 'is_featured')
    list_editable = ('is_published', 'is_featured')
    search_fields = ('title', 'author')
    list_per_page = 30

admin.site.register(Book, BookAdmin)