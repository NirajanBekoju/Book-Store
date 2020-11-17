from rest_framework import serializers
from .models import Inquiry

class InquirySerializer(serializers.Serializer):
    class Meta:
        model = Inquiry
        fields = '__all__'
        