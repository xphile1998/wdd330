const requestURL = './song_info.json';

const wrapper = document.getElementById('wrapper');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('albumCover');

// Song titles (temporary storage)
const songs = ['Asia_Asia_HeatOfTheMoment', 'Boston_Boston_MoreThanAFeeling', 'Boston_ThirdStage_Amanda', 'DannyElfman_NightmareBeforeChristmas_ThisIsHalloween', 'FaithHill_GrinchSoundtrack_WhereAreYouChristmas', 'HueyLewis_BackToTheFuture_ThePowerOfLove', 'PatBenatar_InTheHeatOfTheNight_Heartbreaker', 'Styx_ParadiseTheater_TooMuchTimeOnMyHands'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
getSongs(requestURL, songIndex);

// Play song
function playSong() {
    wrapper.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// Pause song
function pauseSong() {
    wrapper.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// Previous song
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    getSongs(requestURL, songIndex);

    playSong();
}

// Next song
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    getSongs(requestURL, songIndex);

    playSong();
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = wrapper.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Song ends
audio.addEventListener('ended', nextSong);

// Functions to deal with the JSON data
function getSongs(url) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(function (jsonObject) {
            const songList = jsonObject['songList'];

            displaySongs(songList, songIndex);
        })
}

function displaySongs(songList, songIndex) {
    wrapper.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    console.log(songList[songIndex]);

    artist.innerText = songList[songIndex].artist;
    title.innerText = songList[songIndex].title;
    albumName.innerText = songList[songIndex].album;
    year.innerText = songList[songIndex].release;
    runtime.innerText = songList[songIndex].runtime;
    chart.innerText = songList[songIndex].highest_chart;

    cover.src = `images/covers/${songList[songIndex].pic_url}`;
    audio.src = `audio/${songList[songIndex].song_url}`;
}

/*======================================\\
||                                      ||
||  Like Button Stuff                   ||
||                                      ||
\\======================================*/
const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon");
// let count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    // count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    // count.textContent--;
  }
});

