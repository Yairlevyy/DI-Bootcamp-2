from django.shortcuts import render
from django.http import HttpResponse # pass view information into the browser
import json

# Create your views here.
name = 'Bob Smith'
age = 35
country = 'USA'

def display_person(request):
    person = {name:name,age:age,country:country}
    person_json = json.dumps(person, indent=2)
    return HttpResponse(person_json)

people = ['bob','martha', 'fabio', 'john']

def display_people(request):
    sorted_people = sorted(people)
    capitalized_people = [name.capitalize() for name in sorted_people]
    json_people = json.dumps(capitalized_people,indent=2)
    return HttpResponse(json_people)

all_people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]

def display_all_people(request):
    sorted_by_age = sorted(all_people, key=lambda x: x['age'])
    json_list = json.dumps(sorted_by_age,indent=2)
    return HttpResponse(json_list)



