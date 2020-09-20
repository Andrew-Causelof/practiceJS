const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

//songs titles
const songs = ['hey', 'summer', 'ukulele'];

//keep track of song

let songIndex = 0;

//Initiali load song details into DOM

loadSong(songs[songIndex]);

//Update song details

function loadSong(song) {
    title.inertext = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}


function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    
    audio.pause();
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    
    audio.play();
}


// Event listener

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});


// Change Song

function prevSong(){
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
}

function nextSong(){

    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
}


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Time song update

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress);


// click on progress bar

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;

}

progressContainer.addEventListener('click', setProgress);

// Song ends

audio.addEventListener('ended', nextSong);