from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import serializers

User._meta.get_field('email')._unique = True


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email', 'is_staff']
        
        
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = { 'password': {'write_only': True}}
    
    def create(self, validate_data):
        user = User.objects.create_user(
            validate_data['username'],
            validate_data['email'],
            validate_data['password']
        )
        return user
    

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Wrong Credentials')
        