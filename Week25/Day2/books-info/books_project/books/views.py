from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Book
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json

# Create your views here.
def list_books(request):
    books = Book.objects.all()
    book_data = [
        {
            'title': book.title,
            'author': book.author,
            'published_date': book.published_date.strftime('%Y-%m-%d'),
            'description': book.description,
            'page_count': book.page_count,
            'categories': book.categories,
            'thumbnail_url': book.thumbnail_url,
        }
        for book in books
    ]
    return JsonResponse({'books': book_data})

def book_detail(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    
    book_data = {
        'title': book.title,
        'author': book.author,
        'published_date': book.published_date.strftime('%Y-%m-%d'),
        'description': book.description,
        'page_count': book.page_count,
        'categories': book.categories,
        'thumbnail_url': book.thumbnail_url,
    }

    return JsonResponse({'book': book_data})

@csrf_exempt
@require_POST
def create_book(request):
    data = json.loads(request.body)
        
    new_book = Book.objects.create(
        title=data['title'],
        author=data['author'],
        published_date=data['published_date'],
        description=data['description'],
        page_count=data['page_count'],
        categories=data['categories'],
        thumbnail_url=data['thumbnail_url']
    )

    book_data = {
        'title': new_book.title,
        'author': new_book.author,
        'published_date': new_book.published_date.strftime('%Y-%m-%d'),
        'description': new_book.description,
        'page_count': new_book.page_count,
        'categories': new_book.categories,
        'thumbnail_url': new_book.thumbnail_url,
    }

    return JsonResponse({'book': book_data})
