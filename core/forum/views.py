from django.shortcuts import render
from .models import Thread
from .serializers import ListThreadSerializer
from rest_framework.response import Response
from rest_framework.views import APIView


class ThreadList(APIView):
    def get(self, request, *args, **kwargs):
        threads = Thread.objects.prefetch_related('author').all()
        data = ListThreadSerializer(threads, many=True).data
        return Response(data)

