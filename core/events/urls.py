from django.urls import path
from .views import EventsCount, EventListCreate

urlpatterns = [
    path('', EventListCreate.as_view(), name='events_list_create'),
    path('count/', EventsCount.as_view(), name='no_of_events'),
]

