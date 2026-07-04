from django.http import HttpResponse
from django.db import connection
def user_lookup(request):
    uid = request.GET.get("id", "")
    with connection.cursor() as c:
        c.execute("SELECT * FROM users WHERE id=%s", [uid])
    return HttpResponse("ok")
