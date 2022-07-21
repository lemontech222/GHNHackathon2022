from django.urls import path
from .views import EventsCount, EventListCreate, EventRetrieveUpdateDestroyCreate

urlpatterns = [
    path('', EventListCreate.as_view(), name='events_list_create'),
    path('<int:pk>/', EventRetrieveUpdateDestroyCreate.as_view(), name='retrieve_update_event'),
    path('count/', EventsCount.as_view(), name='no_of_events'),
]

