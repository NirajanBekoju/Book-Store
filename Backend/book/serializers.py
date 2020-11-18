from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'category', 'image', 'price', 'is_featured')

class BookDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
        lookup_fields = 'id'

class FeaturedBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'image')
