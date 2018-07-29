from .DBConnection import StoreProc
class Book:

    def __init__(self, name, author, date, category):
        self.name = name
        self.author = author
        self.date = date
        self.category = category
        sp = 'INSERT_Book'
        accion = StoreProc.execute(sp, params = [('', name), ('', author), ('', date) ('', category)])
        print(accion)
        return True

    @staticmethod
    def create_book():
        sp = 'CREATE_Book'
        accion = StoreProc.execute(sp, params= [('', self.name), ('', self.author), ('', self.category)])
        return accion

    @staticmethod
    def books():
        sp = 'GET_Books'
        result = StoreProc.execute_json(sp)
        return result
    
    @staticmethod
    def details(id):
        sp = 'GET_BookByID'
        result = StoreProc.execute_json(sp, params = [('', id)])
        return result
    
    @staticmethod
    def page(id, page, format):
        sp = 'GET_BookPage'
        result = StoreProc.execute_json(sp, [('',id), ('',page), ('',format)])
        return result