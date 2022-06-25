from django.contrib import admin
from .models import Survey,SurveyQuestion,SurveyResponse


admin.site.register(Survey)
admin.site.register(SurveyQuestion)
admin.site.register(SurveyResponse)

