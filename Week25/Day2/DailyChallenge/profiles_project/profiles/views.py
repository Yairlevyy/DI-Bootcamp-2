from django.shortcuts import render
from .models import Profile
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST,require_http_methods

# Create your views here.
@csrf_exempt
@require_POST
def create_profile(request):
    try:
        name = request.POST['name']
        email = request.POST['email']

        new_profile = Profile(name=name, email=email)
        new_profile.save()

        return JsonResponse({'success': True, 'message': 'Profile created successfully'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)})
    


@csrf_exempt
@require_http_methods(["DELETE"])
def delete_profile(request, id):
    try:
        profile = Profile.objects.get(id=id)

        profile.delete()

        return JsonResponse({'success': True, 'message': 'Profile deleted successfully'})
    except Profile.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Profile not found'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)})