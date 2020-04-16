from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSerializer, LoginSerializer, RegisterSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from knox.models import AuthToken


class UserAPI(generics.RetrieveAPIView):
    
    permission_classes = [ IsAuthenticated, ]
    serializer_class = UserSerializer
    
    def get_object(self):
        return self.request.user
    
    
# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })
    
    
    