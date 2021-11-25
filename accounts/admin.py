from django.contrib import admin
from .models import Account

class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'phone_number')
    list_display_links = ('id', 'name', 'email')
    search_fields = ('name', 'email')
    list_per_page = 30

admin.site.register(Account, AccountAdmin)
