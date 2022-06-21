from django.urls import path
from .views import UserDetail, UserList, CustomUserCreate

urlpatterns = [
    path('', UserList.as_view(), name='listusers'),
    path('<int:pk>/', UserDetail.as_view(), name='userdetails'),
    path('register/', CustomUserCreate.as_view(), name='create_user')
]
