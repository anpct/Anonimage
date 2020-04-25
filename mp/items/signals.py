import numpy as np
import cv2
import pickle
import os
from django.contrib.staticfiles.storage import staticfiles_storage
from django.conf import settings

#1. grayscale rgb mean and variance
def get_pixel_summary(img):
  img_gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) 
  luminance = img_gray.mean()
  red = img[:,:,2].mean()
  green = img[:,:,1].mean()
  blue = img[:,:,0].mean()
  
  gray_var = img_gray.var()
  red_var = img[:,:,2].var()
  green_var = img[:,:,1].var()
  blue_var = img[:,:,0].var()

  return luminance, red, green, blue, gray_var, red_var, green_var, blue_var

#2. distinct pixel rate
def get_dist_pixel_rate(img):
  height, width,_    = img.shape
  dist_pixel = len(np.unique([str(x) for x in img[:,:,:].reshape(-1, 3).tolist()]))
  dist_pixel_rate = dist_pixel / float(height * width)
  return dist_pixel_rate

#3. colorfulness
def image_colorfulness(img):
  (B, G, R) = cv2.split(img.astype("float"))
  rg = np.absolute(R - G)
  yb = np.absolute(0.5 * (R + G) - B)
  (rbMean, rbStd) = (np.mean(rg), np.std(rg))
  (ybMean, ybStd) = (np.mean(yb), np.std(yb))
  stdRoot = np.sqrt((rbStd ** 2) + (ybStd ** 2))
  meanRoot = np.sqrt((rbMean ** 2) + (ybMean ** 2))
  colorfulness = stdRoot + (0.3 * meanRoot)
  return colorfulness
  
#4. saturation
def get_saturation(img):
  img_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
  saturation = img_hsv[:,:,1].mean()
  return saturation

#5 blur
def get_blur(img):
  blur = cv2.Laplacian(img, cv2.CV_64F).var()
  return blur

#6 sharpness
def get_sharpness(img):
  img_gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) 
  gy, gx = np.gradient(img_gray)
  gnorm = np.sqrt(gx**2 + gy**2)
  sharpness = np.average(gnorm)
  return sharpness

def calculateScore(img):
    image = cv2.imread(img.name)
    luminance, red, green, blue, gray_var, red_var, green_var, blue_var = get_pixel_summary(image)
    dist_pixel_rate = get_dist_pixel_rate(image)
    colorfulness = image_colorfulness(image)
    saturation = get_saturation(image)
    blur = get_blur(image)
    sharpness = get_sharpness(image)
    arr = [luminance, red, green, blue, gray_var, red_var, green_var, blue_var, dist_pixel_rate, colorfulness, saturation, blur, sharpness]
    url = staticfiles_storage.path('frontend/ml/model1.sav')
    loaded_model = pickle.load(open(url, 'rb'))
    ans = loaded_model.predict(np.array(arr).reshape(1, -1))
    return ans[0]

import threading
class LikeThread(threading.Thread):
    def __init__(self, instance, **kwargs):
        self.instance = instance
        super(LikeThread, self).__init__(**kwargs)

    def run(self):
        score = calculateScore(self.instance.item.file)
        score = round(score,4)
        up = Item.objects.filter(id=self.instance.id).update(score=score)

from .models import Item
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=Item)
def score(sender, instance, created, **kwargs):
    if created:
      LikeThread(instance).start()