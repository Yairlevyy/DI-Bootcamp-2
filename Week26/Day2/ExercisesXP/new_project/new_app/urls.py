from django.urls import path
from .views import DepartmentAPIView, EmployeeAPIView, ProjectAPIView, TaskAPIView

urlpatterns = [
    path('department/', DepartmentAPIView.as_view(), name='department-list'),
    path('department/<int:pk>/', DepartmentAPIView.as_view(), name='department-detail'),
    path('employee/', EmployeeAPIView.as_view(), name='employee-list'),
    path('employee/<int:pk>/', EmployeeAPIView.as_view(), name='employee-detail'),
    path('project/', ProjectAPIView.as_view(), name='department-list'),
    path('project/<int:pk>/', ProjectAPIView.as_view(), name='department-detail'),
    path('task/', TaskAPIView.as_view(), name='department-list'),
    path('task/<int:pk>/', TaskAPIView.as_view(), name='department-detail'),
]