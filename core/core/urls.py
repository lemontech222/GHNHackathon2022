from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from users.views import MyTokenObtainPairView, EntityCounts,HubCommunitiesCount,HubInnovatorsCount

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/counts/', EntityCounts.as_view(), name='entity-counts'),
    path('api/users/', include('users.urls')),
    path('api/events/', include('events.urls')),
    path('api/forums/', include('forum.urls')),
    path('api/hub_innovators/count/', HubInnovatorsCount.as_view(), name='hub_innovators'),
    path('api/hub_communities/count/', HubCommunitiesCount.as_view(), name='hub_communities'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('docs/', include_docs_urls(title='HackathonAPI')),
    path('schema/', get_schema_view(
        title="HackathonAPI",
        description="API for the GHN Hackathon Project",
        version="1.0.0",
    ), name="openapi-schema"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

