console.log('its working')
console.log('its working')
let songs;
let currFolder;
let currentaudio=new Audio();
let currentaudio=new Audio();
async function fetchsongs(folder) {
    currFolder=folder
    let a = await fetch(`${currFolder}/`)
    currFolder=folder
    let a = await fetch(`/public/${currFolder}/`)
    let response = await a.text();
    console.log(response)
    let div = document.createElement('div')
    div.innerHTML = response
    let as=div.getElementsByClassName('icon-mp3')
    songs=[]
    console.log(response)
    let div = document.createElement('div')
    div.innerHTML = response
    let as=div.getElementsByClassName('icon-mp3')
    songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        songs.push(element.href)
        songs.push(element.href)
    }
    
    let songsul=document.querySelector('.songslist').getElementsByTagName("ul")[0]
        songsul.innerHTML = "";
        for (const song of songs) {
            songsul.innerHTML=songsul.innerHTML+ `<li><a href="${song}">
    
    let songsul=document.querySelector('.songslist').getElementsByTagName("ul")[0]
        songsul.innerHTML = "";
        for (const song of songs) {
            songsul.innerHTML=songsul.innerHTML+ `<li><a href="${song}">
            <img src="music.svg" alt="">
            <div class="songinfo">
            <div class="songname">${song.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0]}</div>
            <div class="artistname">${song.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]}
            <div class="songname">${song.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0]}</div>
            <div class="artistname">${song.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]}
            </div>
            </div>
            <div class="playnow">Play Now
            <img src="playbar-play.svg" alt="">
            </div>  
            </li>`
        }
        document.querySelectorAll(".songslist li a").forEach(a =>{
            a.addEventListener('click', element =>{
                element.preventDefault()
                let song=a.href;
                currentaudio.src = song; 
                currentaudio.play();
                play.src="pause.svg"
                document.querySelector('.songnaam').innerHTML=currentaudio.src.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
            });
        }); 

}

function formatTime(seconds) {
    seconds = Math.floor(seconds);  // Ensures no milliseconds
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    if(isNaN(secs)){
        return "00:00"
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
            </li>`
        }
        document.querySelectorAll(".songslist li a").forEach(a =>{
            a.addEventListener('click', element =>{
                element.preventDefault()
                let song=a.href;
                currentaudio.src = song; 
                currentaudio.play();
                play.src="pause.svg"
                document.querySelector('.songnaam').innerHTML=currentaudio.src.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
            });
        }); 

}

function formatTime(seconds) {
    seconds = Math.floor(seconds);  // Ensures no milliseconds
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    if(isNaN(secs)){
        return "00:00"
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

async function displayalbum(){
    let a = await fetch(`/public/songs/`)
async function displayalbum(){
    let a = await fetch(`/public/songs/`)
    let response = await a.text();
    console.log(response)
    let div = document.createElement('div')
    let cardcontainer=document.querySelector('.card-container')
    div.innerHTML = response
    let anchors = div.getElementsByTagName('a')
    let array=Array.from(anchors)
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            if(e.href.includes("/public/songs/")){
            let folder=(e.href.split('/public/songs/')[1])
            let a = await fetch(`/public/songs/${folder}/info.json`)
    console.log(response)
    let div = document.createElement('div')
    let cardcontainer=document.querySelector('.card-container')
    div.innerHTML = response
    let anchors = div.getElementsByTagName('a')
    let array=Array.from(anchors)
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            if(e.href.includes("/public/songs/")){
            let folder=(e.href.split('/public/songs/')[1])
            let a = await fetch(`/public/songs/${folder}/info.json`)
            let response = await a.json();
            console.log(response);
            cardcontainer.innerHTML=cardcontainer.innerHTML+`<div data-folder="${folder}" class="card">
            <img src= "/public/songs/${folder}/cover.jpg" alt="">
            <div class="play">
                <img src="play.svg" alt="">
            </div>
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`

        Array.from(document.getElementsByClassName('card')).forEach(e=>{
            e.addEventListener('click',async item=>{
                await fetchsongs(`/public/songs/${item.currentTarget.dataset.folder}`)
                currentaudio.src = songs[0];
                currentaudio.play();
                play.src="pause.svg"
                document.querySelector('.songnaam').innerHTML=currentaudio.src.split('public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
                document.querySelector('.left').style.left=0;
            })
                
        })
            cardcontainer.innerHTML=cardcontainer.innerHTML+`<div data-folder="${folder}" class="card">
            <img src= "/public/songs/${folder}/cover.jpg" alt="">
            <div class="play">
                <img src="play.svg" alt="">
            </div>
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`

        Array.from(document.getElementsByClassName('card')).forEach(e=>{
            e.addEventListener('click',async item=>{
                await fetchsongs(`/public/songs/${item.currentTarget.dataset.folder}`)
                currentaudio.src = songs[0];
                currentaudio.play();
                play.src="pause.svg"
                document.querySelector('.songnaam').innerHTML=currentaudio.src.split('public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
                document.querySelector('.left').style.left=0;
            })
                
        })
        }
    }
    
}
    
async function main(){
    await fetchsongs("/public/songs/")
    let play=document.getElementById('play')

play.addEventListener('click',e=>{
    if(currentaudio.paused){
        currentaudio.play()
        play.src="pause.svg"
    }
    else{
        currentaudio.pause()
        play.src="playbar-play.svg"
    }
})

// code to present album covers
displayalbum()

currentaudio.addEventListener('timeupdate',e=>{
    document.querySelector('.songtime').innerHTML=`${formatTime(currentaudio.currentTime)}  / ${formatTime(currentaudio.duration)}`;
    document.querySelector('.circle').style.left=(currentaudio.currentTime/currentaudio.duration)*100 + "%"
})

document.querySelector(".seekbar").addEventListener('click',e=>{
    let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
    document.querySelector('.circle').style.left=percent + "%"
    currentaudio.currentTime=(currentaudio.duration*percent)/100
})


document.querySelector('.hamburger').addEventListener('click',e=>{
    document.querySelector('.left').style.left=0;
})

document.querySelector('.close').addEventListener('click',e=>{
    document.querySelector('.left').style.left="-900px";
})

previous.addEventListener('click',()=>{
    if(songs.indexOf(currentaudio.src)>=0){
        currentaudio.src=songs[songs.indexOf(currentaudio.src)-1]
        currentaudio.play()
        document.querySelector('.songnaam').innerHTML=currentaudio.src.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
    }
})
next.addEventListener('click',()=>{
    if(songs.indexOf(currentaudio.src)<songs.length-1){
        currentaudio.src=songs[songs.indexOf(currentaudio.src)+1]
        currentaudio.play()
        document.querySelector('.songnaam').innerHTML=currentaudio.src.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
    }
})

volicon.addEventListener('click',e=>{
    volrange.style.display=(volrange.style.display=='block')?'none':'block';
})

volrange.addEventListener('input',e=>{
    currentaudio.volume=e.target.value/100;
    if(currentaudio.volume==0){
        volicon.src="mute.svg"
    }
    else if(currentaudio.volume<0.5){
        volicon.src="lowvolume.svg"
    } 
    else {
        volicon.src="volume.svg"
    }
})

let mute=document.querySelector('.signin')

mute.addEventListener('click',e=>{
    if(currentaudio.volume!=0){
        currentaudio.volume=0;
        mute.style.backgroundColor="black"
    }
    else{
        currentaudio.volume=1;
        mute.style.backgroundColor="rgba(0, 0, 0,0.3)"
    }
})

    
}
    
async function main(){
    await fetchsongs("/public/songs/")
    let play=document.getElementById('play')

play.addEventListener('click',e=>{
    if(currentaudio.paused){
        currentaudio.play()
        play.src="pause.svg"
    }
    else{
        currentaudio.pause()
        play.src="playbar-play.svg"
    }
})

// code to present album covers
displayalbum()

currentaudio.addEventListener('timeupdate',e=>{
    document.querySelector('.songtime').innerHTML=`${formatTime(currentaudio.currentTime)}  / ${formatTime(currentaudio.duration)}`;
    document.querySelector('.circle').style.left=(currentaudio.currentTime/currentaudio.duration)*100 + "%"
})

document.querySelector(".seekbar").addEventListener('click',e=>{
    let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
    document.querySelector('.circle').style.left=percent + "%"
    currentaudio.currentTime=(currentaudio.duration*percent)/100
})


document.querySelector('.hamburger').addEventListener('click',e=>{
    document.querySelector('.left').style.left=0;
})

document.querySelector('.close').addEventListener('click',e=>{
    document.querySelector('.left').style.left="-900px";
})

previous.addEventListener('click',()=>{
    if(songs.indexOf(currentaudio.src)>=0){
        currentaudio.src=songs[songs.indexOf(currentaudio.src)-1]
        currentaudio.play()
        document.querySelector('.songnaam').innerHTML=currentaudio.src.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
    }
})
next.addEventListener('click',()=>{
    if(songs.indexOf(currentaudio.src)<songs.length-1){
        currentaudio.src=songs[songs.indexOf(currentaudio.src)+1]
        currentaudio.play()
        document.querySelector('.songnaam').innerHTML=currentaudio.src.split('/public/songs/')[1].split('/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[0] + "<br>" + currentaudio.src.split('/public/songs/')[1].replaceAll('%20',' ').split('.mp3')[0].split('-')[1]
    }
})

volicon.addEventListener('click',e=>{
    volrange.style.display=(volrange.style.display=='block')?'none':'block';
})

volrange.addEventListener('input',e=>{
    currentaudio.volume=e.target.value/100;
    if(currentaudio.volume==0){
        volicon.src="mute.svg"
    }
    else if(currentaudio.volume<0.5){
        volicon.src="lowvolume.svg"
    } 
    else {
        volicon.src="volume.svg"
    }
})

let mute=document.querySelector('.signin')

mute.addEventListener('click',e=>{
    if(currentaudio.volume!=0){
        currentaudio.volume=0;
        mute.style.backgroundColor="black"
    }
    else{
        currentaudio.volume=1;
        mute.style.backgroundColor="rgba(0, 0, 0,0.3)"
    }
})

}



main()
main()
