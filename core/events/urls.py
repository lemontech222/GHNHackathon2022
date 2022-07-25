from django.urls import path
from .views import EventsCount, EventCreate, EventRetrieveUpdateDestroyCreate, EventsList

urlpatterns = [
    path('', EventCreate.as_view(), name='events_create'),
    path('list/', EventsList.as_view(), name='events_list'),
    path('<int:pk>/', EventRetrieveUpdateDestroyCreate.as_view(), name='retrieve_update_event'),
    path('count/', EventsCount.as_view(), name='no_of_events'),
]

