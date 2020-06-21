import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://search.naver.com/search.naver?where=post&sm=tab_jum&query=ckall',headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
soup = BeautifulSoup(data.text, 'html.parser')
#sp_blog_1 > div > a.sp_thmb.thmb80 > img
#sp_blog_1 > dl > dd.sh_blog_passage
#sp_blog_1 > div > a.sp_thmb.thmb80"

#imgs = soup.find(".a.sp_thmb.thmb80 > img")['src']
# print(soup.select_one("#sp_blog_1 > div > a.sp_thmb.thmb80 > img")["src"])
# descs = soup.select("sh_blog_passage")
# hrefs = soup.find(".a.sp_thmb.thmb80")['href']
# index = 0
# for i in descs:
#     index += 1
#     print(imgs)
#     print(i.text)
#     if index >= 3:
#         break

lis = list(soup.select('#elThumbnailResultArea > li'))

index = 0
for li in lis:
    index += 1
    print(li.select_one('div > a > img')['src'])
    print(li.select_one('div > a')['href'])
    print(li.select_one('dl > dd.sh_blog_passage').text)
    if index >= 3:
        break