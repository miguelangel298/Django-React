from django.conf.urls import url as baseurl
from djurl import url
from . import views


urlpatterns = [
    url('api/books/', views.books),
    url('api/book/:id/', views.bookdetail),
    url('api/book/:id/:page/:format/', views.bookpage),
]
