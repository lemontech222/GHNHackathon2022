from django.urls import path
from .views import HubAdminUserCreate, UserModelViewset
from rest_framework.routers import DefaultRouter

app_name = 'users'
router = DefaultRouter()
router.register('', UserModelViewset, basename='user')
urlpatterns = [
    path('register/', HubAdminUserCreate.as_view(), name='create_user')
] + router.urls

