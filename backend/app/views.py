from django.shortcuts import render
from rest_framework import viewsets
from .models import Apps, ProfileText
from .serializers import AppsSerializer, ProfileTextSerializer

class AppsViewSet(viewsets.ModelViewSet):
    serializer_class = AppsSerializer
    queryset = Apps.objects.all()

class ProfileTextViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileTextSerializer
    queryset = ProfileText.objects.all()