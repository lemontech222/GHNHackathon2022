from django.db import models
from accounts.models import User


class Thread(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date="date_posted")
    date_posted = models.DateTimeField(auto_now_add=True)
    # Thread image

    def __str__(self):
        return self.title

class Comment(models.Model):
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField(blank=True)
    is_reply = models.BooleanField(default=False)
    parent_id = models.IntegerField(null=True,blank=True)

    def __str__(self):
        return self.comment



