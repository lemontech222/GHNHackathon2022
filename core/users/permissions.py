from rest_framework.permissions import (
                            SAFE_METHODS, 
                            BasePermission,
                            AllowAny,
                            IsAdminUser,
                            DjangoModelPermissionsOrAnonReadOnly
                        )

class CurrentUserProfilePermission(BasePermission):
    message = 'Editing posts is restricted to the author only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj == request.user

class HubProfilePermission(BasePermission):
    message = 'Unauthorized access'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user in obj.users.all()


class OnwnershipPermission(BasePermission):
    message = 'Unauthorized access'

    def has_object_permission(self, request, view, obj):
        return request.user in obj.applicaion.event.hub.users.all()
