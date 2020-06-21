import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta  

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://search.naver.com/search.naver?where=post&sm=tab_jum&query=르라보+떼누아+후기',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

lis = list(soup.select('#elThumbnailResultArea > li'))

index = 0
for li in lis:
    index += 1
    img = li.select_one('div > a > img')['src']
    #print(li.select_one('div > a > img')['src'])
    link = li.select_one('div > a')['href']
    #print(li.select_one('div > a')['href'])
    text = li.select_one('dl > dd.sh_blog_passage').text
    #print(li.select_one('dl > dd.sh_blog_passage').text)
    print(img, link, text)
    
    doc = {
        'name' :'LTA',
        'img' : img,
        'link' : link,
        'text' : text,
        'like' : 0
    }
    db.LTA_reviews.insert_one(doc)

    if index >= 3:
        break

    