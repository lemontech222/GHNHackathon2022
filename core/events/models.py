from django.db import models
from django.utils import timezone
from users.models import Hub
from accounts.models import User


class Event(models.Model):
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    number_of_seats = models.IntegerField(null=True, blank=True)
    gps_address = models.CharField(max_length=15)
    contact_person = models.CharField(max_length=20)
    event_pic = models.ImageField(default='User.png',upload_to='events_pics', null=True, blank=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    recurring = models.BooleanField(default=False)
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return 'event'


class EventApplication(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    date_applied = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} applied to {self.event.title}'


class EventEnrollment(models.Model):
    application = models.ForeignKey(EventApplication, on_delete=models.CASCADE)
    accepted = models.BooleanField(default=True)
    completed = models.BooleanField(default=False)
    date_enrolled = models.DateTimeField(auto_now_add=True)
    date_completed = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'{self.application.user.username} in {self.application.event.title}'


class Post(models.Model):
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    event_pic = models.ImageField(default='User.png',upload_to='events_pics', null=True, blank=True)
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'post {self.id}'

