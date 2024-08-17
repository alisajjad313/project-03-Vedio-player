const vedio = document.getElementById('vedio');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestramp = document.getElementById('timestramp');

//Functions
//1 toggleVedio -play or pause vedio
//if vedio is playing then pause 
//if vedio is paused then play
function toggleVedio(){
    if(vedio.paused){
        vedio.play();
    }
    else{
        vedio.pause();
    }
};

//2 updateIcon - toggle  between play and pause icon
//If vedio is playing then show pause icon 
//If vedio is paused then show play icon
function updateIcon(){
    if(vedio.paused){
        play.innerHTML='<i class="fa-solid fa-play fa-2x"></i>';
    }
    else{
        play.innerHTML='<i class="fa-solid fa-pause fa-2x"></i>';   
    }
};

//3 update progress - update the position of progress bar and times tramp
function updateProgress(){
     progress.value=vedio.currentTime/vedio.duration*100;

     //rpounding down the minutes
     let minutes=Math.floor(vedio.currentTime / 60);
     if(minutes < 10){
        minutes=`0${minutes}`
     }

     //rounding down the seconds
     let seconds=Math.floor(vedio.currentTime % 60);
     if(seconds < 10){
        seconds=`0${seconds}`
     }

     //display times tramp
     timestramp.innerHTML=`${minutes}:${seconds}`
    };

//4 stopvedio - stop vedio playback and reset time to 0
function stopVedio(){
     vedio.pause();
     vedio.currentTime = 0;
};

//5 setprogress - update vedio playback time based on change in progress bar
function setprogress(){
  vedio.currentTime=progress.value*vedio.duration/100;
};

//Event Listners
//1 vedio element - click to play or pause vedio
vedio.addEventListener('click',toggleVedio);

//2 vedio element - pause to toggle play icon to pause icon
vedio.addEventListener('pause',updateIcon);

//3 vedio element - play to toggle pause icon back to  play icon
vedio.addEventListener('play',updateIcon);

// 4 vedio element - update progress bar and timestramp 
vedio.addEventListener('timeupdate',updateProgress);

//5 play button - click to play or pause vedio
play.addEventListener('click',toggleVedio);

//6 stop button - click to reset vedio and pause vedio
stop.addEventListener('click',stopVedio);

//7 progress bar - chang position to change time of playback
progress.addEventListener('change',setprogress);
