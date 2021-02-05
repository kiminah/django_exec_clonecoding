from django.http import HttpResponse
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate,login #로그인 기능을 하는 패키지 함수
from django.contrib.auth import logout as django_logout
from .forms import SignupForm, LoginForm #forms.py를 생성해서 SignupForm, LoginForm 정의해야 함

# Create your views here.


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user=form.save()
            login(request, user)
            return redirect('/')
    else:
        form = SignupForm()
    return render(request, 'accounts/signup.html',{'form':form,})


def login_check(request):
    if request.method== "POST":
        form=LoginForm(request.POST)
        name=request.POST['username']
        pwd=request.POST['password']

        user=authenticate(username=name, password=pwd)

        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            return HttpResponse('로그인 실패. 다시 시도 해보세요.')


def logout(request) :
    django_logout(request) #기본 로그아웃 기능 사용 - 연결된 세션을 종료
    return redirect("index")