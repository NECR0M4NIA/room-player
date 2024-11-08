const tracks = [
    { title: "Searching Members", src: "audio/Searching Members.wav" },
    { title: "Nocturn", src: "audio/Nocturn.wav" },
    { title: "New Aura", src: "audio/New Aura.wav" },
    { title: "Look At The Sky", src: "audio/Look At The Sky.wav" },
    { title: "Drive With Me", src: "audio/Drive With Me.wav" },
    { title: "Boreal", src: "audio/Boreal.wav" },
    { title: "Golden Reflections", src: "audio/Golden Reflections.wav" },
    { title: "Tell Me What To Do", src: "audio/Tell Me What To Do.wav" },
    { title: "5 Stars", src: "audio/Synthetic Pulse.wav" },
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
