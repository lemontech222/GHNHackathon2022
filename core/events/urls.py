from django.urls import path
from .views import EventsCount

urlpatterns = [
    path('count/', EventsCount.as_view(), name='no_of_events'),
]

