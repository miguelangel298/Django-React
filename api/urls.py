from django.conf.urls import url as baseurl
from djurl import url
from . import views


urlpatterns = [
    url('books/', views.books),
    url('book/:id/', views.bookdetail),
    url('book/:id/:page/:format/', views.bookpage),
]
