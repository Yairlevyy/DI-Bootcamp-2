from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from django.contrib.auth.models import User  # Assuming you have a User model
from .models import Profile

@receiver(post_save, sender=Profile)
def notify_new_profile(sender, instance, created, **kwargs):
    if created:
        print(f"New Profile created - Name: {instance.name}, Email: {instance.email}")


@receiver(pre_delete, sender=Profile)
def warn_before_deleting(sender, instance, **kwargs):
    if instance.is_active:
        print(f"The Profile to be deleted is still active!")

