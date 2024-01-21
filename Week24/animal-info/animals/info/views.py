from django.shortcuts import render
from . import data
import json
from django.http import HttpResponse # pass view information into the browser

# Create your views here.

def display_all_animals(request):
    return HttpResponse(data.animals)

def display_all_families(request):
    return HttpResponse(data.families)

def get_animal_by_id(id):
    for animal in data.animals:
        if animal['id'] == id:
            return animal
    return None

def display_one_animal(request, animal_id):
    animal = get_animal_by_id(animal_id)
    animal_json = json.dumps(animal, indent=2)
    return HttpResponse(animal_json)

def get_animal_by_family_id(id):
    animals = []
    for animal in data.animals:
        if animal['family'] == id:
            animals.append(animal)
    return animals

def display_animal_per_family(request, family_id):
    animals = get_animal_by_family_id(family_id)
    return HttpResponse(animals)

