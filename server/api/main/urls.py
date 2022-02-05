from django.urls import path
from . import views

urlpatterns = [
    path('', views.chat, name='chat'),
    path('login', views.login, name='login'),
    path('users', views.users, name='users_list'),
    path('users/edit/<id>', views.edit_user, name='edit_user')
]
