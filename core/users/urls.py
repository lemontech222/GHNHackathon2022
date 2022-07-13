from django.urls import path
from .views import (
                    HubAdminUserCreate, 
                    StartupUserCreate, 
                    IndividualUserCreate,
                    UserModelViewset,
                    InnovatorsCount
                    )
from rest_framework.routers import DefaultRouter

app_name = 'users'
router = DefaultRouter()
router.register('', UserModelViewset, basename='user')
urlpatterns = [
    path('register/', IndividualUserCreate.as_view(), name='create_user'),
    path('register_hub/', HubAdminUserCreate.as_view(), name='create_hub_user'),
    path('register_startup/', StartupUserCreate.as_view(), name='create_startup_user'),
    path('innovators/count/', InnovatorsCount.as_view(), name='innovators_count'),
] + router.urls

