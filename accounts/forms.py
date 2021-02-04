from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.core.validators import validate_email
from .models import Profile
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
#
class LoginForm(forms.ModelForm):
    class Meta:
        model=User
        fields=["username","password"]

class SignupForm(UserCreationForm):
    # username = forms.CharField(label='사용자명', max_length=20)
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].validators = [validate_email]
        self.fields['username'].label = '이메일'

    def save(self):
        user=super().save()
        user.email=user.username
        return user
