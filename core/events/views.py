from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Event

class EventsCount(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        events_count  = Event.objects.filter(hub__user = request.user).count()
        return Response({'events_count':events_count},status=status.HTTP_200_OK)

