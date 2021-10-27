console.log("WWelcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "1", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "2", filePath: "Songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "3", filePath: "Songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "4", filePath: "Songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "5", filePath: "Songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: " any1 Salam-e-ishq", filePath: "Songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "any2 Salam-e-ishq", filePath: "Songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "any3 Salam-e-ishq", filePath: "Songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "any4 Salam-e-ishq", filePath: "Songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "any5 Salam-e-ishq", filePath: "Songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})