from flask import Flask, render_template, request, jsonify
#from cr2 import cr2
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbsparta

app = Flask(__name__)
# URL 별로 함수명이 같거나,
# route('/') 등의 주소가 같으면 안됩니다.

#cr.py
# ckall = cr('ckall')
# print(ckall)

@app.route('/')
def home():
   return render_template('index3.html')

# @app.route('/cr_to_client')
# def cr_to_client():
#     return cr(request.args.q['text'])

@app.route('/about.html')
def about():
    return render_template('about.html')

# index3
@app.route('/api/list', methods=['GET'])
def reviews():
    stars = list(db.reviews2.find({}).sort('like',-1))
    new_stars = []
    for star in stars:
        print(star)
        new_stars.append({
            'name': star['name'],
            'img': star['img'],
            'img': star['img'],
            'text': star['text'],
            'like': star['like'],
            

            
        })
    return jsonify({'result': 'success','reviews':new_stars})


@app.route('/api/like', methods=['POST'])
def like():
    # 1. 클라이언트가 전달한 name_give를 name_receive 변수에 넣습니다.
    name_receive = request.form['name_give']
    cr(name_receive)

    # 2. mystar 목록에서 find_one으로 name이 name_receive와 일치하는 star를 찾습니다.
    star = db.mystar.find_one({'name':name_receive})
    # 3. star의 like 에 1을 더해준 new_like 변수를 만듭니다.
    new_like = star['like']+1

    # 4. mystar 목록에서 name이 name_receive인 문서의 like 를 new_like로 변경합니다.
    # 참고: '$set' 활용하기!
    db.reviews2.update_one({'name':name_receive},{'$set':{'like':new_like}})

    # 5. 성공하면 success 메시지를 반환합니다.
    return jsonify({'result': 'success'})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)
   
    # pip3 install flask pymongo jsonify requests bs4