from django.db import models
from accounts.models import User

# Profile
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    contact = models.CharField(max_length=20, null=True, blank=True)
    physical_address = models.TextField(null=True, blank=True)
    gps_address = models.CharField(max_length=15, null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    profile_pic = models.ImageField(default='User.png',upload_to='profile_pics', null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'


# Hub
class Hub(models.Model):
    users = models.ManyToManyField(User, related_name="admins")
    hub_name = models.CharField(max_length=255, null=True, blank=True)
    hub_profile_pic = models.ImageField(default='User.png',upload_to='hub_profile_pics', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    contact = models.CharField(max_length=20, null=True, blank=True)
    physical_address = models.TextField(null=True, blank=True)
    gps_address = models.CharField(max_length=15, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    business_registration_number = models.CharField(max_length=100, null=True, blank=True)
    business_certificate = models.ImageField(default='User.png',upload_to='hub_certificates', null=True, blank=True)
    newly_created = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.hub_name} hub'

# Hub
class Startup(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    startup_name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    contact = models.CharField(max_length=20, null=True, blank=True)
    physical_address = models.TextField(null=True, blank=True)
    gps_address = models.CharField(max_length=15, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    business_registration_number = models.CharField(max_length=100, null=True, blank=True)
    business_certificate = models.ImageField(default='User.png',upload_to='innovators_certificates', null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} hub'


class StartupPortfolio(models.Model):
    startup = models.ForeignKey(Startup, on_delete=models.CASCADE)
    project_title = models.CharField(max_length=255)
    project_description = models.TextField(blank=True)
    project_link = models.TextField(blank=True)
    project_image = models.ImageField(default='User.png',upload_to='innovator_portfolio_projects', null=True, blank=True)
    start_date = models.DateTimeField(null=True, blank=True)
    end_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.project_title


# Portfolio
class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project_title = models.CharField(max_length=255)
    project_description = models.TextField(blank=True)
    project_link = models.TextField(blank=True)
    project_image = models.ImageField(default='User.png',upload_to='user_portfolio_projects', null=True, blank=True)
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
