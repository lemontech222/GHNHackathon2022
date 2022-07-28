from django.contrib import admin
from .models import (
                        Event,
                        EventApplication,
                        EventEnrollment,
                        Post
                    )


admin.site.register(Event)
admin.site.register(EventApplication)
admin.site.register(EventEnrollment)
admin.site.register(Post)

