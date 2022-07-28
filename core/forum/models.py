from django.db import models
from accounts.models import User
from django.db.models.signals import pre_save
from core.utils import unique_slug_generator

class Thread(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    slug = models.SlugField(max_length=250,null=True,blank=True)
    date_posted = models.DateTimeField(auto_now_add=True)
    thread_image = models.ImageField(upload_to='events_pics', null=True, blank=True)
    comments_count = models.IntegerField(default=0, blank=True)

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


def slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(slug_generator,sender=Thread)

