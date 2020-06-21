import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta

def cr(searchText):
    headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get('https://search.naver.com/search.naver?where=post&sm=tab_jum&query=ckall',headers=headers)

    # HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦ㅔㅛ쇄
    soup = BeautifulSoup(data.text, 'html.parser')
 
    lis = list(soup.select('#elThumbnailResultArea > li'))


    result = []
    index = 0
    for li in lis:
        index += 1
        img = li.select_one('div > a > img')['src']
        link = li.select_one('div > a')['href']
        desc = li.select_one('dl > dd.sh_blog_passage').text
        print(img,link,desc)
        if index >= 3:
            break
        print(img,link,desc)
        # return result
        # doc = {
        #     'img' : img,
        #     'link' : link,
        #     'desc' : desc
        # }
        # db.project.reviews.insert(doc)
        


        # img = img[0].text
        # link = link[0].text
        # desc = desc[0].text

        # b_post = {'img' : img, 'link' : link, 'desc' : desc}
        # b_post_list.append(b_post)

        #result.append(item)
        # doc = {
        #     img : img,
        #     link : link,
        #     desc : desc
        # }
        #db.project.reviews.insert_one(doc)
        
    # return b_post_list


