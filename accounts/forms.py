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
        self.fields['username'].help_text='이메일 형식을 입력하세요'
        self.fields['username'].label='Email'

    def save(self, commit=True):
        user=super().save(commit=False)
        user.email=user.username
        if commit:
            user.save()
        return user