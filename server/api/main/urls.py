from django.urls import path
from . import views

urlpatterns = [
    path('', views.chat, name='chat'),
    path('login', views.chat, name='login'),
    path('users', views.chat, name='users_list'),
    path('users/edit/<id>', views.edit_user, name='edit_user')
]
