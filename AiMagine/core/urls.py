from django.contrib import admin
from django.urls import path
from .views import home,promp_handler
urlpatterns = [
    path("",view=home,name='home'),
    path("api/prompt/",view=promp_handler,name='prompt_handler'),
]
