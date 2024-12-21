from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.task_list, name='get_tasks'),
    path('tasks/<int:pk>/', views.update_task, name='update_task'),
    path('tasks/<int:pk>/delete/', views.delete_task, name='delete_task'),
     path('languages/', views.language_list, name='get_languages'),
]
