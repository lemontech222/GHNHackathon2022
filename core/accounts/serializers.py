from rest_framework import serializers
from .models import User
from users.models import Profile

class BriefProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class BriefUserSerializer(serializers.ModelSerializer):
    profile = BriefProfileSerializer()
    class Meta:
        model = User
        fields = ('id','username','profile')

