const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Create Function for clicking on video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } 
    else {
        video.pause(); 
    }
}

// Create Function for Play/Pause icons 

function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }
    else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}


// Creat function to update the progress
 
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    
}

// Create Function To stop the Video

function stopVideo() {
    video.currentTime = 0;
    video.pause(); 
}

// Create Function to update the video Progress using the slider

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

//Event Listeners
//1. Event Listeners for clicking on the video
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon );
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

//2. Event Listener for Play Button 
play.addEventListener('click', toggleVideoStatus);
 

// 3. Event Listeners for top Button
stop.addEventListener('click', stopVideo);


// 4. Event Listenrs for Progress Bar 

progress.addEventListener('change', setVideoProgress);