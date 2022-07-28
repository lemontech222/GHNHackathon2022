from rest_framework import serializers
from .models import Thread, Comment
from accounts.serializers import BriefUserSerializer

class ListCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class ListThreadSerializer(serializers.ModelSerializer):
    author = BriefUserSerializer()

    class Meta:
        model = Thread
        fields = ('id','author','title','content','slug','date_posted','thread_image','comments_count')
