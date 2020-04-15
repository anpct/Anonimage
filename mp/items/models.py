from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.
class Item(models.Model):
    item = models.ImageField(upload_to = "items",null = False, blank = False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null = False, blank = False, related_name="items")
    score = models.IntegerField(default=0)
    verified = models.BooleanField(default=False)
    date_posted  = models.DateField(default=datetime.now)