from django.urls import re_path as url 
from calculator import views

urlpatterns = [
	url(r'^$', views.index, name="index"),
]