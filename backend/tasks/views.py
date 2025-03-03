# tasks/views.py
from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

# Provides both GET (list) and POST (create) for tasks
class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    

class TaskRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer