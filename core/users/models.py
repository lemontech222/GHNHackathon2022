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


# Portfolio
class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project_title = models.CharField(max_length=255)
    project_description = models.TextField(blank=True)
    project_link = models.TextField(blank=True)
    # project_image
    start_date = models.DateTimeField(null=True, blank=True)
    end_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.project_title


# Work experience
class WorkExperience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    company = models.CharField(max_length=255)
    company_address = models.TextField(blank=True)
    position = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True,blank=True)
    still_working_here = models.BooleanField(default=False)
    

    def __str__(self):
        return self.position
