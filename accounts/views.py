from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login # 로그인 기능을 하는 패키지 함수
from django.contrib.auth import logout as django_logout
from .forms import SignupForm # forms.py 생성해서 SignupForm, LoginFrom 정의해야 함
from django.contrib.auth.models import User
from django.contrib import auth
# Create your views here.


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            if request.POST['password1'] == request.POST['password2']:
                user = User.objects.create_user(
                    username=request.POST['username'],
                    password=request.POST['password1']
                )
                return redirect('/')
    else:
        form = SignupForm()
    return render(request, 'accounts/signup.html')

def community(request):
    return render(request, 'accounts/community.html')