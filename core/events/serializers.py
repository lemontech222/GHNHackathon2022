from rest_framework import serializers

from users.serializers import HubSerializer
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'



class ListEventSerializer(serializers.ModelSerializer):
    hub = HubSerializer()

    class Meta:
        model = Event
        fields = ('id','hub','title','description','location','number_of_seats','gps_address','contact_person','event_pic','start_date','end_date','recurring','date_posted')


class ListPostSerializer(serializers.ModelSerializer):
    hub = HubSerializer()

    class Meta:
        model = Event
        fields = ('id','hub','title','description','event_pic','date_posted')

