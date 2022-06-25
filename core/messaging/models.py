from django.db import models
from accounts.models import User


class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    recipient_id = models.IntegerField()
    date_sent = models.DateTimeField(auto_now_add=True)
    message = models.TextField(blank=True)
    # Attachment

    def __str__(self) -> str:
        return f'{self.message} sent by {self.sender.username}'



