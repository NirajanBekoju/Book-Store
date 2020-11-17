from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from rest_framework.response import Response

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        try:
            if data['aggrement'] == 'on':
                contact = Contact(
                    name=data['name'], 
                    email=data['email'], 
                    message=data['message'], 
                    aggrement=True)
                contact.save()
                return Response({'success', 'Message Sent Successfully'})
            return Response({'aggrement': 'Please confirm the aggrement policy'})
        except:
            return Response({'error': 'Message Failed to sent'})
            