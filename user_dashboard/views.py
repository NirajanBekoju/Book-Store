from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView

class UserDashboard(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, format=None):
        user = self.request.user
        user_data = {"name": user.name, "email": user.email, "phone_number": user.phone_number}
        return Response(user_data)
        