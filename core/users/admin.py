from django.contrib import admin
from .models import Profile, Hub, Portfolio, WorkExperience, Startup


admin.site.register(Profile)
admin.site.register(Hub)
admin.site.register(Portfolio)
admin.site.register(WorkExperience)
admin.site.register(Startup)

