from rest_framework import routers
from .views import AppsViewSet, ProfileTextViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('apps', AppsViewSet)
router.register('profileTexts', ProfileTextViewSet)

urlpatterns = [
    path('', include(router.urls)),
]