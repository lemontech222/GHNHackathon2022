from email.mime import application
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import (
                                        SAFE_METHODS, BasePermission, 
                                        IsAuthenticated, DjangoModelPermissionsOrAnonReadOnly
                                    )

from users.models import Hub
from .models import Event, EventApplication, Post
from .serializers import EventSerializer, ListEventSerializer,ListPostSerializer
# from users.serializers import HubSerializer

from django.forms.models import model_to_dict

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Permission classes

class HubProfilePermission(BasePermission):
    message = 'Unauthorized access'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user in obj.users.all()


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

class EventsList(APIView):
    def get(self, request, *args, **kwargs):
        events = Event.objects.prefetch_related('hub').all()
        data = ListEventSerializer(events, many=True).data
        return Response(data)


class PostsList(APIView):
    def get(self, request, *args, **kwargs):
        events = Post.objects.prefetch_related('hub').all()
        data = ListPostSerializer(events, many=True).data
        return Response(data)

# @api_view(["GET"])
# def list_events(request, *args, **kwargs):
#     if request.method == "GET":
#         all_events = Event.objects.all()
#         events_serializer = EventSerializer(all_events, many=True)
#         data = events_serializer.data
        
#         return Response({'events':data})
    #     if serializer.is_valid(raise_exception=True):
    #         return Response(serializer.data)
    #     return Response({'msg':'invalid data'})
    # elif request.method == "GET":
    #     instance = Product.objects.all().order_by('?').first()
    #     data = {}
    #     if instance:
    #         # data = model_to_dict(instance)
    #         data = ProductSerializer(instance).data
    #     return Response(data)

@api_view(['POST'])
def apply_to_event(request, *args, **kwargs):
    if request.user.is_authenticated:
        current_user = request.user
        event_id = request.data['event_id']
        this_event = Event.objects.get(id=event_id)
        application_exists = EventApplication.objects.filter(user=current_user, event=this_event)
        if len(application_exists) > 0:
            return Response({'message':'Already applied to this event'}, status=status.HTTP_409_CONFLICT)

        new_application = EventApplication(user=current_user, event=this_event)
        new_application.save()
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

class EventCreate(generics.CreateAPIView):
    permission_classes = [HubProfilePermission]
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventRetrieveUpdateDestroyCreate(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

