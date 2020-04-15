from django.urls import path
from .api import UserAPI, LoginAPI, RegisterAPI
from knox import views as knox_views

urlpatterns = [
    path('login/', LoginAPI.as_view(), name="login"),
    path('register/', RegisterAPI.as_view(), name="register"),
    path('user/', UserAPI.as_view(), name="user"),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('login2/', knox_views.LoginView.as_view(), name='login2')
]
