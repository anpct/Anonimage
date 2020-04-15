from rest_framework import viewsets, generics
from rest_framework.responses import Response
from .serializers import ItemSerializer, UserSerializer, LoginSerializer, RegisterSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from knox.models import AuthToken


class UserAPI(generics.RetrieveAPIView):
    
    permission_classes = [ IsAuthenticated, ]
    serializer_class = UserSerializer
    
    def get_object(self):
        return self.request.user
    
class LoginAPI(generics.GenericAPIView):
    
    permission_classes = [ AllowAny, ]
    serializer_class = LoginSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validate_data
        _, Token = AuthToken.objects.create(user)
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token
        })
        
        
class RegisterAPI(generics.GenericAPI):
    
    permission_classes = [ AllowAny, ]
    serializer_class = RegisterSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        _, Token = AuthToken.objects.create(user)
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token
        })