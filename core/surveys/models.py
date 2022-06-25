from django.db import models
from accounts.models import User
from users.models import Hub

QUESTION_TYPES = (
    ("single_choice", "single_choice"),
    ("multiple_choice", "multiple_choice"),
    ("single_answer", "single_answer"),
    ("essay_answer", "essay_answer"),
)

class Survey(models.Model):
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title


class SurveyQuestion(models.Model):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    question = models.TextField()
    question_type = models.CharField(max_length=20,choices=QUESTION_TYPES,default='single_answer')

    def __str__(self):
        return self.question


class SurveyResponse(models.Model):
    question = models.ForeignKey(SurveyQuestion, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    response = models.TextField(blank=True)
    date_responded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.response
    




