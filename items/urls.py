from django.urls import path
from rest_framework import routers
from .api import ItemViewSet, AdminItemViewSet, AllItemsViewSet

router = routers.SimpleRouter()
router.register(r'items', ItemViewSet, basename="items")
router.register(r'v-items', AdminItemViewSet, basename="v-item")
router.register(r'all-items', AllItemsViewSet, basename="all-items")

urlpatterns = router.urls