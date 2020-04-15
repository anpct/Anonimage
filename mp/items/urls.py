from django.urls import path
from rest_framework import routers
from .api import ItemViewSet

router = routers.SimpleRouter()
router.register(r'items', ItemViewSet, basename="items")

urlpatterns = router.urls