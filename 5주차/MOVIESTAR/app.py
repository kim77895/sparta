from pymongo import MongoClient

from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.dbsparta


# HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

# API 역할을 하는 부분
@app.route('/api/list', methods=['GET'])
def stars_list():
    # {'result': 'success', 'movie_stars': [{}, ...]}
    movie_stars = list(db.mystar.find({}, {'_id': 0}))
    print(movie_stars)

    return jsonify({'result': 'success','movie_stars': movie_stars})


@app.route('/api/like', methods=['POST'])
def star_like():
    # request: {'name': '신현빈'}
    got_name = request.form['name'] # 신현빈

    found_movie_star = db.mystar.find_one({'name': got_name})

    print(found_movie_star)

    db.mystar.update_one({'name': got_name}, {'$set': {'like': found_movie_star['like'] + 1}})

    # response: {'result': 'success'}
    return jsonify({'result': 'success','msg':'like 연결되었습니다!'})


@app.route('/api/delete', methods=['POST'])
def star_delete():
    # request: {'name': '신현빈'}
    got_name = request.form['name'] # 신현빈

    db.mystar.update_one({'name': got_name}, {'$set': {'is_delete': True}})

    return jsonify({'result': 'success'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)