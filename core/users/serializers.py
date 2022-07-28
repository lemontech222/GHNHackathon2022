from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from accounts.models import User
from .models import Hub, Startup

# Customize token claims serializer
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        

        if user.is_hub_admin:
            hub = Hub.objects.get(users__id=user.id)

            # Add custom claims
            token['username'] = user.username
            token['is_hub_admin'] = user.is_hub_admin
            token['is_startup_admin'] = user.is_startup_admin
            token['profile_pic'] = user.profile.profile_pic.url
            token['hub'] = {'hub_name':hub.hub_name,'hub_id':hub.id,'hub_profile_pic':hub.hub_profile_pic.url}
            # token['hub_id'] = hub.id
            # token['hub_profile_pic'] = hub.hub_profile_pic.url
        elif user.is_startup_admin: 
            startup = Startup.objects.get(user=user)
            token['username'] = user.username
            token['is_hub_admin'] = user.is_hub_admin
            token['is_startup_admin'] = user.is_startup_admin
            token['profile_pic'] = user.profile.profile_pic.url
            token['startup_profile'] = {'startup_name':startup.startup_name,'startup_id':startup.id,'startup_profile_pic':startup.hub_profile_pic.url}
            
        else:
            token['username'] = user.username
            token['is_hub_admin'] = user.is_hub_admin
            token['is_startup_admin'] = user.is_startup_admin
            token['profile_pic'] = user.profile.profile_pic.url
                        
        # ...

        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','username','first_name','last_name','is_hub_admin','is_startup_admin')


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','username','password','first_name','last_name')
        extra_kwargs = {'password': {'write_only':True}}

    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance


class HubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hub
        fields = '__all__'

