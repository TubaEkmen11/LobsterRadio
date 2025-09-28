const tracks = [
    { name: "Dans Et - Hayko Cepkin", file: "music/HaykoCepkin-DansEt.mp3" },
    { name: "Fırtınam - Hayko Cepkin", file: "music/HaykoCepkin-Firtinam.mp3" },
    { name: "Geç Kaldım - Hayko Cepkin", file: "music/HaykoCepkin-GecKaldim.mp3" },
    { name: "Bertaraf Et - Hayko Cepkin", file: "music/HaykoCepkin-BertarafEt.mp3" },
    { name: "Yalnız Kalsın - Hayko Cepkin", file: "music/HaykoCepkin-YalnizKalsin.mp3" }
];

const anons = { name: "LOBSTER RADIO", file: "music/LobsterRadio.mp3" };

let currentTrack = 0;
let isAnonsNext = false;

const audio = document.getElementById("audio");
const trackName = document.getElementById("track-name");
const startButton = document.getElementById("start-button");

function playTrack(index) {
    const track = tracks[index];
    audio.src = track.file;
    trackName.textContent = `Çalan:  ${track.name}`;
    audio.play();
    isAnonsNext = true;
}

function playAnons() {
    audio.src = anons.file;
    trackName.textContent = `📢 ${anons.name}`;
    audio.play();
    isAnonsNext = false;
}

audio.addEventListener("ended", () => {
    if (isAnonsNext) {
        playAnons();
    } else {
        currentTrack = (currentTrack + 1) % tracks.length;
        playTrack(currentTrack);
    }
});

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    playTrack(currentTrack);
});