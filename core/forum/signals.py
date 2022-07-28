from django.db.models.signals import pre_save
from .models import Thread
from core.utils import unique_slug_generator


