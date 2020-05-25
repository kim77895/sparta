import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

musics = soup.select('#body-content > div.newest-list > div.music-list-wrap > table.list-wrap > tbody > tr')
#body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.info > a.title.ellipsis


for music in musics:
        rank = music.find('td',{'class':'number'}).text[0:2] 
        #td.number
        title = music.find('td',{'class':'info'}).find("a",{"class":"title ellipsis"}).text
        # td.info > a.title.ellipsis
        artist = music.find('td',{'class':'info'}).find("a",{"class":"artist ellipsis"}).text
        #td.info > a.artist.ellipsis
        print(rank.strip(),title.strip(),artist.strip())