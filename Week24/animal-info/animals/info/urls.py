from django.urls import path
from . import views

urlpatterns = [
    path('animals/',views.display_all_animals,name='animal_list'),
    path('families/',views.display_all_families, name='family_list'),
    path('animal/<int:animal_id>/', views.display_one_animal, name='animal_detail'),
    path('animal_in_family/<int:family_id>/', views.display_animal_per_family, name='animal_in_family_detail'),
]

