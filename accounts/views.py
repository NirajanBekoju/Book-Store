from .models import Account
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

class SignupView(APIView):
    authentication_classes = []
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        phone_number = data['phone_number']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if Account.objects.filter(email=email).exists():
                return Response({'error': 'Email Already exists'})
            else:
                if(len(password) < 6):
                    return Response({'error': 'Password must be atleast 6 characters'})
                else:
                    user = Account.objects.create_user(email=email, name=name, phone_number=phone_number, password=password)
                    user.save()
                    return Response({'success': 'User Created Successfully'})
        else:
            return Response({'error': 'Passwords donot match'})

