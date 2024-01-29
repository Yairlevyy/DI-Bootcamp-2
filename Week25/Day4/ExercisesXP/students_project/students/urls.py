from django.urls import path
from .views import StudentListView, StudentDetailView

urlpatterns = [
    path('students/', StudentListView.as_view(), name='student_list'),
    path('students/<int:student_id>/', StudentDetailView.as_view(), name='student_detail'),
    # Add other URL patterns if needed
]