from rest_framework import serializers
from .models import Card, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name_character', 'species', 'house', 'image_url','date_of_birth','patronus','price','xp_points','current_owner','previous_owner')



