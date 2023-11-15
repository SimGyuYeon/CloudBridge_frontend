import psycopg2 as pg2
import requests
import json

def send_api(path, method, file_id):
    API_HOST = "http://localhost:8000"
    url = API_HOST + path
    headers = {'Content-Type': 'application/json', 'charset': 'UTF-8', 'Accept': '*/*'}
    params={'file_id':file_id}
    
    try:
        if method == 'GET':
            response = requests.get(url, params=params, headers=headers)
        elif method == 'POST':
            response = requests.post(url, headers=headers, data=json.dumps(body, ensure_ascii=False, indent="\t"))
        print("response status %r" % response.status_code)
        print("response text %r" % response.text)
    except Exception as ex:
        print(ex)

with pg2.connect(database="postgres",user="postgres",password="qawsedrf",host="133.186.146.159",port="5432") as conn:
    with conn.cursor() as cur:
        cur.execute('SELECT * FROM "FileList"')
        file_list = cur.fetchall()

        print('api 실행')

        for i in file_list:
            if i[5] == '진행중':
                id = i[0]
                send_api("/api/create_model2", "GET", id)
                break

        print('api 실행 종료')
