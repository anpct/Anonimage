from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys
# Create your models here.

from django.core.exceptions import ValidationError

def file_size(value): # add this to some file where you can import it from
    limit = 2*1024 *1024
    if value.size > limit:
        raise ValidationError('File too large. Size should not exceed 500KB.')
    
class Item(models.Model):
    item = models.ImageField(upload_to = "items",null = False, blank = False, validators=[file_size])
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null = False, blank = False, related_name="items")
    score = models.DecimalField(max_digits=5, decimal_places=5, default=0, null = True, blank=True)
    verified = models.BooleanField(default=False)
    date_posted  = models.DateTimeField(default=timezone.now)
    accepted = models.BooleanField(default=False)
    