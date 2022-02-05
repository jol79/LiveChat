from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import json


def chat(request):
    """
    Required structure of the response:
    {
        chat_name: ...,
        participants: ...,
        messages: [
            [
                id: ...,
                user: {
                    name: ...,
                    id: ...
                },
                text: ...,
                created_at: ...
            ]
        ]
    }
    """

    if request.method != "GET":
        return JsonResponse({
            'wrong_request_type': True
        })

    try:
        chat_messages_query = Message.objects.filter(chat=1)
        chat_messages = []
        
        for item in chat_messages_query:
            message = {}
            message["id"] = item.id
            message["user"] = {
                "id": item.user.id,
                "name": item.user.name
            }
            message["text"] = item.text
            message["created_at"] = item.created_at
            chat_messages.append(message)

        chat_name = Chat.objects.get(id=1)
        participants = Participant.objects.filter(chat=1)
        response_data = {
            "chat_name": chat_name.name,
            "participants": len(participants),
            "messages": chat_messages
        }
    except:
        response_data = {}

    return JsonResponse(response_data)


@csrf_exempt
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
    
    try:
        query_result = User.objects.get(
            email=request_data['email'],
            password=request_data['password']
        )

        user_role = Participant.objects.get(user=query_result.id, chat=1)
        response_data = {
            'authorized': True,
            'role': user_role.role.name,
            'wrong_credentials': False,
            'wrong_request_type': True
        }
    except:
        response_data = {
            'authorized': False,
            'wrong_credentials': True,
            'wrong_request_type': False
        }

    return JsonResponse(response_data, safe=True)


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


@csrf_exempt
def edit_user(request):
    if request.method != "POST":
        return JsonResponse({
            'wrong_request_type': True
        })

    pass
