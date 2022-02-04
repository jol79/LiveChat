from django.db import models

class User(models.Model):
    name = models.CharField(max_length=65, null=False)
    password = models.CharField(max_length=42, null=False)
    email = models.CharField(max_length=42, unique=True, null=False)

    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name
    

class Chat(models.Model):
    name = models.CharField(max_length=65, null=False, unique=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

    
class Message(models.Model):
    text = models.CharField(max_length=248, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.text


class Role(models.Model):
    name = models.TextField(null=False, default="User")

    def __str__(self):
        return f"Role: {self.name}"


class Participant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['chat']

    def __str__(self):
        return f"{self.user.name} participate in {self.chat.name}"
