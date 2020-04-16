
from .models import Item
from rest_framework import viewsets
from .serializers import ItemSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser

class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    permission_classes = ( IsAuthenticated, )
    
    def get_queryset(self):
        return Item.objects.filter(owner = self.request.user).order_by('-date_posted')
    
    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)



class AdminItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    permission_classes = ( IsAdminUser, )
    queryset = Item.objects.all().filter(verified = False)
    

class AllItemsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ItemSerializer
    permission_classes = ( IsAuthenticated, )
    queryset = Item.objects.filter(accepted = True).order_by('-date_posted')
    