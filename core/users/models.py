from django.db import models
from accounts.models import User


# Profile
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    contact = models.CharField(max_length=20, null=True, blank=True)
    physical_address = models.TextField(null=True, blank=True)
    gps_address = models.CharField(max_length=15, null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    # profile_pic

    def __str__(self):
        return f'{self.user.username} profile'


# Hub
class Hub(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    hub_name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    contact = models.CharField(max_length=20, null=True, blank=True)
    physical_address = models.TextField(null=True, blank=True)
    gps_address = models.CharField(max_length=15, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    business_registration_number = models.CharField(max_length=100)
    # business certificate pic or pdf

    def __str__(self):
        return self.hub_name


