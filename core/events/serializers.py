from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','hub','title',
                    'description','location',
                    'number_of_seats','gps_address',
                    'contact_person','recurring',
                    'start_date','end_date')


