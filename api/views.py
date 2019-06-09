from django.shortcuts import render
from django.http import JsonResponse
from .utils.DBConnection import StoreProc
from .utils.Book import Book

# Create your views here.

def books(request):
    if request.method == 'GET':
        return Book.list_books()
    return JsonResponse({'status': 1})

def bookdetail(request, id):
    if request.method == 'GET':
        # availableformat = StoreProc.execute(sp2, params = [('', id)])
        return Book.details(id)
    return JsonResponse({'status': 1})

def bookpage(request, id,page,format):
    if request.method == 'GET':
        return Book.page(id,page,format)
    return JsonResponse({'status': 1})

def new_book():
    category = 1
    return Book('hola', 'miguel', '2012-02-21', category)
