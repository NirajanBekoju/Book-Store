from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework import permissions
from .models import Book
from .serializers import BookSerializer, BookDetailSerializer

class ListingsBookView(ListAPIView):
    queryset = Book.objects.order_by('-created_date').filter(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = BookSerializer
    lookup_field = 'id'

class ListingBookDetailView(RetrieveAPIView):
    queryset = Book.objects.order_by('-created_date').filter(is_published=True)
    serializer_class = BookDetailSerializer
    lookup_field = 'id'

class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = BookSerializer

    def post(self, request, format=None):
        queryset = Book.objects.order_by('-created_date').filter(is_published=True)
        data = self.request.data

        title = data['title']
        queryset = queryset.filter(title__icontains=title)

        author = data['author']
        queryset = queryset.filter(author__icontains=author)

        category = data['category']
        queryset = queryset.filter(category__iexact=category)

        price = data['price']
        if price == 'NRs. 0-1000':
            price = 1000
        elif price == 'NRs. 1000-2000':
            price = 2000
        elif price == 'NRs. 2000-3000':
            price = 3000
        elif price == 'NRs. 3000-4000':
            price = 4000
        elif price == 'NRs. 4000-5000':
            price = 5000
        else:
            price = 0
        
        # Filter if price is not any
        if price != 0:
            queryset.filter(price__range = (price-1000, price))
        
        keywords = data['keywords']
        queryset = queryset.filter(description__icontains=keywords)

        serializers = BookSerializer(queryset, many=True)

        return Response(serializers.data)

        

