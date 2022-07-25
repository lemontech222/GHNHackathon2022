from rest_framework import serializers

from users.serializers import HubSerializer
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    hub = HubSerializer()

    class Meta:
        model = Event
        fields = ('hub','title','description','location','number_of_seats','gps_address','contact_person','event_pic','start_date','end_date','recurring')


