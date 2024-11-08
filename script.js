const tracks = [
    { title: "Searching Members", src: "audio/track1.mp3" },
    { title: "Nocturn", src: "audio/track2.mp3" },
    { title: "New Aura", src: "audio/track3.mp3" },
    { title: "Look At The Sky", src: "audio/track4.mp3" },
    { title: "Drive With Me", src: "audio/track5.mp3" },
    { title: "Boreal", src: "audio/track6.mp3" },
    { title: "Golden Reflections", src: "audio/track7.mp3" },
    { title: "Tell Me What To Do", src: "audio/track8.mp3" },
    { title: "5 Stars", src: "audio/track9.mp3" },
];

const trackListElement = document.getElementById("trackList");
const playPauseButton = document.getElementById("playPause");
let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio(tracks[currentTrackIndex].src);

function loadTracks() {
    tracks.forEach((track, index) => {
        const li = document.createElement("li");
        li.textContent = track.title;
        li.addEventListener("click", () => playTrack(index));
        trackListElement.appendChild(li);
    });
}

function playTrack(index) {
    if (index !== currentTrackIndex) {
        audio.pause();
        currentTrackIndex = index;
        audio = new Audio(tracks[currentTrackIndex].src);
    }
    togglePlayPause();
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "▶️";
    } else {
        audio.play();
        playPauseButton.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
}

playPauseButton.addEventListener("click", togglePlayPause);

document.getElementById("prevTrack").addEventListener("click", () => {
    playTrack((currentTrackIndex - 1 + tracks.length) % tracks.length);
});

document.getElementById("nextTrack").addEventListener("click", () => {
    playTrack((currentTrackIndex + 1) % tracks.length);
});

loadTracks();
