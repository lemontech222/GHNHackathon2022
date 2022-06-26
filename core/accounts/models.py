from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser


class CustomUserManager(BaseUserManager):
    def create_user(self,email,password,first_name,last_name,**extra_fields):
        if not email:
            raise ValueError('You must provide an email address')
        
        if not first_name:
            raise ValueError('You must provide a first name')

        if not last_name:
            raise ValueError('You must provide a last name')

        email = self.normalize_email(email)
        user=self.model(email=email,first_name=first_name,last_name=last_name,**extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self,email,password,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')

        return self.create_user(email=email,password=password,**extra_fields)


class User(AbstractUser):
    email=models.CharField(max_length=255,unique=True)
    username=models.CharField(max_length=150,unique=True)
    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name','last_name']

    def __str__(self):
        return self.username
    

