from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Participant)
admin.site.register(Message)
admin.site.register(Chat)
admin.site.register(Role)
