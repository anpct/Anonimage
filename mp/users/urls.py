from django.urls import path
from .api import UserAPI, LoginAPI, RegisterAPI

urlpatterns = [
    path('login/', LoginAPI.as_view(), name="login"),
    path('register/', RegisterAPI.as_view(), name="register"),
    path('user/', UserAPI.as_view(), name="user")
]
