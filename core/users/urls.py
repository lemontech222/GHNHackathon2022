from django.urls import path
from .views import (
                    HubAdminUserCreate, 
                    StartupUserCreate, 
                    IndividualUserCreate,
                    UserModelViewset,
                    InnovatorsCount,
                    UserProfile,
                    HubDetails,
                    HubList,
                    GetUserHubDetail
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
    path('user/<int:pk>/', UserProfile.as_view(), name='user_profile'),
    path('hubs/<int:pk>/', HubDetails.as_view(), name='hub_profile'),
    path('get_hub/', GetUserHubDetail.as_view(), name='get_user_hubs'),
    path('hubs/', HubList.as_view(), name='hub_list'),
] + router.urls

