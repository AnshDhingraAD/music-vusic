console.log('its working')

async function fetchsongs() {
    let a = await fetch('http://127.0.0.1:5500/songs/')
    let response = await a.text();
    console.log(response)
    let div = document.createElement('div')
    div.innerHTML = response
    let as=div.getElementsByClassName('icon-mp3')
    songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        songs.push(element.href)
    }
    return songs
}

async function main(){
   let songs= await fetchsongs()
    console.log(songs)
    let songsul=document.querySelector('.songslist').getElementsByTagName("ul")[0]
    for (const song of songs) {
        songsul.innerHTML=songsul.innerHTML+ `<li><a href="${song}">

                            <img src="music.svg" alt="">
                            <div class="songinfo">
                                <div class="songname">${song.split('songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0]}</div>
                                <div class="artistname">${song.split('songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]}
                                </div>
                            </div>
                            <div class="playnow"><span>Play Now</span>
                                <img src="playbar-play.svg" alt="">
                            </div>
        
        
        </li>`

    }
    let audio=new Audio(songs[0])
    audio.play()
}
main()
