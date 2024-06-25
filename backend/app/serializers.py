from rest_framework import serializers
from .models import Apps, ProfileText

class AppsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apps
        fields = ('id', 'name', 'description', 'url')

class ProfileTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileText
        fields = ('id', 'text')