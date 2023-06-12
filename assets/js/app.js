document.addEventListener("DOMContentLoaded", function () {
    //
    // Audio toggle button
    //

    // Define variables
    var roomAudio = document.getElementById('room-audio');
    var isPlaying = false;

    // When audio plays or stops
    roomAudio.onplaying = function() {
        isPlaying = true;
    };
    roomAudio.onpause = function() {
        isPlaying = false;
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