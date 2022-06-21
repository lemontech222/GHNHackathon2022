from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from accounts.models import User
from .serializers import (
                        MyTokenObtainPairSerializer,
                        UserSerializer, 
                        RegisterUserSerializer
                    )
from rest_framework.views import APIView
from rest_framework.permissions import (
                        AllowAny,
                        IsAdminUser,
                        DjangoModelPermissionsOrAnonReadOnly
                    )
from rest_framework_simplejwt.views import TokenObtainPairView

# Customize Token claims
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserList(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

