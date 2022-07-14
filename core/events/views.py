from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import (
                                        SAFE_METHODS, BasePermission, 
                                        IsAuthenticated, DjangoModelPermissionsOrAnonReadOnly
                                    )

from .models import Event
from .serializers import EventSerializer

class CreateEventPermission(BasePermission):
    message = 'Unauthorized access'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user in obj.hub.users.all()


class EventsCount(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        events_count  = Event.objects.filter(hub__user = request.user).count()
        return Response({'events_count':events_count},status=status.HTTP_200_OK)


class EventListCreate(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

