from rest_framework import permissions
from rest_framework.views import APIView
from .models import Inquiry
from rest_framework.response import Response
from book.models import Book

class InquiryCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        try:
            book = Book.objects.filter(id=data['book_id'])
            inquiry = Inquiry(
                name=data['name'], 
                email=data['email'], 
                book_id=book[0], 
                message=data['message'], 
                payment_method=data['payment_method']
                )
            inquiry.save()
            return Response({'success': 'Message Sent Successfully'})
        except:
            return Response({'error': 'Message Failed to sent'})
