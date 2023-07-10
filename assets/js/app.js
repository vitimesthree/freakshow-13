document.addEventListener("DOMContentLoaded", function () {
    //
    // Audio toggle button
    //

    // Define variables
    var roomAudio = document.getElementById('room-audio');
    var isPlaying = false;

    // When audio plays or stops
    audioToggle = document.getElementById('audio-toggle-img');
    roomAudio.onplaying = function() {
        isPlaying = true;
        // Replace mute in image source with playing
        audioToggle.src = audioToggle.src.replace('_mute', '_playing');
    };
    roomAudio.onpause = function() {
        isPlaying = false;
        // Replace playing in image source with mute
        audioToggle.src = audioToggle.src.replace('_playing', '_mute');
    };

    // Check if audio is playing
    function togglePlay() {
        if (isPlaying) {
            roomAudio.pause();
        } else {        
            roomAudio.currentTime = 0;
            roomAudio.play();
        }
    };

    // When the toggle button is clicked run togglePlay()
    document.getElementById('audio-toggle').addEventListener('click', function () {
        togglePlay();
    });
});