from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.
class Item(models.Model):
    item = models.ImageField(upload_to = "items",null = False, blank = False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null = False, blank = False, related_name="items")
    score = models.DecimalField(max_digits=5, decimal_places=5, default=0, null = True, blank=True)
    verified = models.BooleanField(default=False)
    date_posted  = models.DateTimeField(default=timezone.now)
    accepted = models.BooleanField(default=False)