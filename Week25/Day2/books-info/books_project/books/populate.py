import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books_project.settings')
import django
django.setup()
from datetime import datetime
from models import Book
import requests
from django.core.exceptions import ObjectDoesNotExist

def fetch_books_from_google_books_api(search_terms):
    api_url = f'https://www.googleapis.com/books/v1/volumes?q={search_terms}'
    response = requests.get(api_url)
    if response.status_code == 200:
        return response.json().get('items', [])
    else:
        response.raise_for_status()

def convert_google_date_format(date_string):
    # Convert Google Books API date format to Django's datetime format
    try:
        return datetime.strptime(date_string, '%Y-%m-%dT%H:%M:%S.%fZ').date()
    except ValueError:
        return None

def populate_books():
    search_terms = 'python'  # Replace with your desired search terms
    books_data = fetch_books_from_google_books_api(search_terms)

    for book_data in books_data:
        volume_info = book_data.get('volumeInfo', {})

        # Extract relevant information from Google Books API response
        title = volume_info.get('title', '')
        author = ', '.join(volume_info.get('authors', []))
        published_date_str = volume_info.get('publishedDate', '')
        published_date = convert_google_date_format(published_date_str)
        description = volume_info.get('description', '')
        page_count = volume_info.get('pageCount', 0)
        categories = ', '.join(volume_info.get('categories', []))
        thumbnail_url = volume_info.get('imageLinks', {}).get('thumbnail', '')

        try:
            # Try to get the book from the database by title and author
            existing_book = Book.objects.get(title=title, author=author)
            print(f"Book '{title}' by {author} already exists in the database.")
        except ObjectDoesNotExist:
            # Create a new Book object if it doesn't exist
            new_book = Book.objects.create(
                title=title,
                author=author,
                published_date=published_date,
                description=description,
                page_count=page_count,
                categories=categories,
                thumbnail_url=thumbnail_url
            )
            print(f"Created new book: '{title}' by {author}")