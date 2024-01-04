let minutes = 25;
let seconds = 0;
let help = 0;
let intervalId;
let help2 = 0;
let help3 = 0;

function alternate() {
  if (help % 2 == 0) {
    startTimer();
    document.getElementById('alternate').innerHTML = 'Pausar';
    document.getElementById("clock").pause();
    document.getElementById("clock").currentTime = 0;
    help++;
  } else {
    pauseTimer();
    help++;
    document.getElementById('alternate').innerHTML = 'Seguir';
    document.getElementById("clock").pause();
    document.getElementById("clock").currentTime = 0;
    }
}

function choosePomodoro() {
    pauseTimer();
    document.getElementById("clock").pause();
    document.getElementById("clock").currentTime = 0;
    help = 0;
    help2 = 0;
    help3=0;
    minutes = 25;
    seconds = 0;
    document.getElementById('alternate').innerHTML = 'Comenzar';
    document.getElementById('minutes').innerHTML = `${minutes}`;
    document.getElementById('seconds').innerHTML = `0${seconds}`;
  
    document.getElementById("pomodoro").style.animationName = "stay";
    document.getElementById("break").style.animationName = "null";
  }
  
  function chooseBreak() {
    pauseTimer();
    document.getElementById("clock").pause();
    document.getElementById("clock").currentTime = 0;
    help = 0;
    help2 = 1;
    help3=0;
    minutes = 5;
    seconds = 0;
    document.getElementById('alternate').innerHTML = 'Comenzar';
    document.getElementById('minutes').innerHTML = `${minutes}`;
    document.getElementById('seconds').innerHTML = `0${seconds}`;
  
    document.getElementById("pomodoro").style.animationName = "null";
    document.getElementById("break").style.animationName = "stay";

  }
  

function reset() {
    if (help2 == 0) {
        pauseTimer();
        help=0;
        help3=0;
        minutes = 25;
        seconds = 0;
        document.getElementById('alternate').innerHTML = 'Comenzar';
        document.getElementById('minutes').innerHTML = `${minutes}`;
        document.getElementById('seconds').innerHTML = `0${seconds}`;
        document.getElementById("clock").pause();
        document.getElementById("clock").currentTime = 0;

    } else {
        pauseTimer();
        help = 0;
        help3=0;
        minutes = 5;
        seconds = 0;
        document.getElementById('alternate').innerHTML = 'Comenzar';
        document.getElementById('minutes').innerHTML = `0${minutes}`;
        document.getElementById('seconds').innerHTML = `0${seconds}`;
        document.getElementById("clock").pause();
        document.getElementById("clock").currentTime = 0;
    }
}

function load() {
  let secondsElement = document.getElementById('seconds');
  let minutesElement = document.getElementById('minutes');

  let txtSeconds;
  let txtMinutes;

  if (seconds < 0 && minutes > 0) {
    seconds = 59;
    minutes--;
  }

  if(help3 == 0 && seconds <= 0 && minutes <= 0) {
    document.getElementById("clock").pause();
    document.getElementById("alarm").play();
    document.getElementById("clock").currentTime = 0;
    help3++;
  }

  if (seconds < 0 && minutes < 0) {
    seconds = 0;
    minutes = 0;
  }

  if (seconds < 10) {
    txtSeconds = `0${seconds}`;
  } else {
    txtSeconds = `${seconds}`;
  }

  if (minutes < 10) {
    txtMinutes = `0${minutes}`;
  } else {
    txtMinutes = `${minutes}`;
  }

  secondsElement.innerHTML = txtSeconds;
  minutesElement.innerHTML = txtMinutes;
  if (!(seconds <= 0 && minutes <= 0)) {
    seconds--;
    var clock = document.getElementById("clock");
    clock.play();
  }
}

function pauseTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function startTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(load, 1000);
}
