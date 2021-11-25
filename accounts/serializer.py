from rest_framework import serializers
from .models import Account

class AccountSerializer(serializers.Serializer):
    class Meta:
        model = Account
        fields = ('name', 'email', 'password', 'phone_number')
        