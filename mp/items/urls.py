from django.urls import path
from rest_framework import routers
from .api import ItemViewSet, AdminItemViewSet

router = routers.SimpleRouter()
router.register(r'items', ItemViewSet, basename="items")
router.register(r'v-items', AdminItemViewSet, basename="v-item")

urlpatterns = router.urls