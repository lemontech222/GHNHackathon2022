from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import viewsets
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

# User views with model viewsets
class UserModelViewset(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    serializer_class = UserSerializer
    # queryset = User.objects.all()

    # Detail views can now use username instead of id
    def get_object(self, queryset=None, **kwargs):
        user = self.kwargs.get('pk')
        return get_object_or_404(User, username=user)


    # Customize queryset
    def get_queryset(self):
        return User.objects.all()


# Create user view
class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

