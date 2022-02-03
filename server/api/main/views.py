from django.shortcuts import render
from django.http import JsonResponse
from .models import *
import json

def chat(request):

    if request.method != "GET":
        return JsonResponse({
            'wrong_request_type': True
        })

    chat_messages_query = Message.objects.filter(chat=1)
    chat_messages = {}

    for item in chat_messages_query:
        chat_messages[item.id] = {
            "id": item.id,
            "user": {
                "id": item.user.id,
                "name": item.user.name
            },
            "text": item.text,
            "created_at": item.created_at
        }

    return JsonResponse(chat_messages)


def login(request):
    """
    Accepts: 
        1. Username
        2. Password
    Returns: 
        1. Authorized
        2. Non-authorized
    """

    if request.method != "POST":
        return JsonResponse({
            'authorized': False,
            'wrong_credentials': False,
            'wrong_request_type': True
        })

    request_data = json.loads(request.body.decode('utf-8'))
    user_authorized = User.objects.filter(id=request_data['user'])

    return JsonResponse(data)


def users(request):
    """
    Returns users list if role of the user is admin
    """
    
    if request.method != "GET":
        return JsonResponse({
            'wrong_request_type': True
        })
    
    request_data = json.loads(request.body.decode('utf-8'))
    participants = Participant.objects.filter(chat=request_data['chat'])

    return JsonResponse(participants)


def edit_user(request):
    if request.method != "POST":
        return JsonResponse({
            'wrong_request_type': True
        })

    pass
