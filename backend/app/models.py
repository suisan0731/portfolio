from django.db import models

class Apps(models.Model):
    name = models.CharField(max_length=64, blank=False, null=False)
    description = models.CharField(max_length=256, blank=False, null=False)
    url = models.CharField(max_length=64, blank=False, null=False)

class ProfileText(models.Model):
    text = models.CharField(max_length=64, blank=False, null=False)

    def __str__(self):
        return self.text