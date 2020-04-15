
from .models import Item
from rest_framework import viewsets
from .serializers import ItemSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser

class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    permission_classes = ( IsAuthenticated, )
    
    def get_queryset(self):
        return self.request.user.items.all()
    
    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)



class AdminItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    permission_classes = ( IsAdminUser, )
    
    def get_queryset(self):
        return Item.objects.filter(verified = False)
    