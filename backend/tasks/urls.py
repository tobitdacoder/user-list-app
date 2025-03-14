# tasks/urls.py
from django.urls import path
from .views import TaskListCreate, TaskRetrieveUpdateDelete

urlpatterns = [
    path('', TaskListCreate.as_view(), name='task-list-create'),
    path('<int:pk>/', TaskRetrieveUpdateDelete.as_view(), name='task-detail'),
]
