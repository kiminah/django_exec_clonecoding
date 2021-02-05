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
    # username이 email로 사용되도록 변경
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].validators = [validate_email]
        self.fields['username'].label = '이메일'


    def save(self):
        user = super().save()  # User 모델에 먼저 저장
        # print(type(user))
        # dir(user)
        Profile.objects.create(  # Profile model에 create(insert 문과 같음)
            user=user,
        )
        return user
