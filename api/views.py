from django.shortcuts import render
from django.http import JsonResponse
from .utils.DBConnection import StoreProc

# Create your views here.

def books(request):
    if request.method == 'GET':
        sp = 'GET_Books'
        return StoreProc.execute_json(sp)
    return JsonResponse({'status': 1})

def bookdetail(request, id):
    if request.method == 'GET':
        sp = 'GET_BookByID '
        detail = StoreProc.execute(sp, params = [('', id)])
        availableformat = StoreProc.execute(sp2, params = [('', id)])
        return JsonResponse({'detail': detail, 'format': availableformat })
    return JsonResponse({'status': 1})

def bookpage(request, id,page,format):
    if request.method == 'GET':
        sp = 'GET_BookPage'
        return StoreProc.execute_json(sp, params = [('',id), ('',page), ('',format)])
    return JsonResponse({'status': 1})
