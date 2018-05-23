from django.db import connection
from django.http import JsonResponse

class StoreProc:
    @staticmethod
    def decode_params(params = []):
        str = ""
        if len(params) == 0:
            return str
        i = len(params)
        for param in params:
            str += "\'{}\'".format(param[1])
            i -= 1
            if i > 0:
                str += ","
        return str

    @staticmethod
    def execute(sp, single = False, params = [], debug = False, raw = False):
        cursor = connection.cursor()
        try:
            decoded = StoreProc.decode_params(params)
            if not raw:
                query = 'CALL {}({})'
                cursor.execute(query.format(sp, decoded))
            else:
                query = '{}'
                cursor.execute(query.format(sp))
            desc = cursor.description
            res = [
                dict(zip([col[0] for col in desc], row ))
                for row in cursor.fetchall()
            ]
            return res if not single else res[0]
        except Exception as err:
            if debug:
                raise err
            return err if debug else { 'err': str(err.args) }
            # return [] if not single else {}
        finally:
            cursor.close()
        return [] if not single else {}

    @staticmethod
    def execute_json(sp, single = False, params = [], debug = False):
        res = StoreProc.execute(sp, single, params, debug)
        return JsonResponse(res, safe=False)
