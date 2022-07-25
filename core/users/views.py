from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import viewsets
from accounts.models import User
from .models import Hub, Profile, Startup
from .serializers import (
                            MyTokenObtainPairSerializer,
                            UserSerializer, 
                            RegisterUserSerializer,
                            HubSerializer
                        )
from rest_framework.views import APIView
from rest_framework.permissions import (
                            SAFE_METHODS, 
                            BasePermission,
                            AllowAny,
                            IsAdminUser,
                            DjangoModelPermissionsOrAnonReadOnly
                        )
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.views import TokenObtainPairView


class CurrentUserProfilePermission(BasePermission):
    message = 'Editing posts is restricted to the author only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj == request.user

class HubProfilePermission(BasePermission):
    message = 'Unauthorized access'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user in obj.users.all()


# Customize Token claims
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# User views with model viewsets
class UserModelViewset(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    # queryset = User.objects.all()

    # Detail views can now use username instead of id
    def get_object(self, queryset=None, **kwargs):
        user = self.kwargs.get('pk')
        return get_object_or_404(User, username=user)


    # Customize queryset
    def get_queryset(self):
        return User.objects.all()


# Create hub admin user view
class HubAdminUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()

            if newuser:
                # Set as hub admin
                newuser.is_hub_admin=True
                newuser.save()
                
                # Create new Hub
                hub = Hub.objects.create(hub_name="")
                hub.users.add(newuser)
                hub.save()

                # Create user profile
                profile = Profile.objects.create(user=newuser)
                profile.save()
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# Create startup user view
class StartupUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()

            if newuser:
                # Set as hub admin
                newuser.is_startup_admin=True
                newuser.save()

                # Create new Hub
                startup = Startup.objects.create(user=newuser)
                startup.save()

                # Create user profile
                profile = Profile.objects.create(user=newuser)
                profile.save()
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# Create startup user view
class IndividualUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()

            if newuser:
                # Create user profile
                profile = Profile.objects.create(user=newuser)
                profile.save()
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class InnovatorsCount(APIView):
    permission_classes = [AllowAny]
    def get(self,request):
        innovators_count = Startup.objects.all().count()
        return Response({'innovators_count':innovators_count}, status=status.HTTP_200_OK)


class UserProfile(generics.RetrieveUpdateAPIView, CurrentUserProfilePermission):
    permission_classes = [CurrentUserProfilePermission]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class HubList(generics.ListAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Hub.objects.all()
    serializer_class = HubSerializer


class GetUserHubDetail(APIView):
    permission_classes = [HubProfilePermission]
    def get(self, request, format=None):
        hub = Hub.objects.get(users__id=request.user.id)
        serializer = HubSerializer(hub)
        return Response(serializer.data)


class HubDetails(generics.RetrieveUpdateAPIView, HubProfilePermission):
    permission_classes = [HubProfilePermission]
    parser_classes = [MultiPartParser, FormParser]
    queryset = Hub.objects.all()
    serializer_class = HubSerializer

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data['newly_created'] = False 
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

