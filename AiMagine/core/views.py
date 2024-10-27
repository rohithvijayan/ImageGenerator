from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
# Create your views here.
def home(request):
    return render(request,'home.html')

@api_view(['POST'])
def promp_handler(request):
    user_input = request.data.get('prompt')
    if user_input:
        print('user input is:',user_input)
        return JsonResponse({"message": "Prompt received successfully","prompt": user_input})
    else:
        return JsonResponse({"message": "No prompt received"},status=400)