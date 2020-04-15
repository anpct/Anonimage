from rest_framework import viewsets
from .serializers import ItemSerializer
from rest_framework.permissions import IsAuthenticated 
from .models import Item

class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
