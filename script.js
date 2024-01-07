let minutos = 25;
let segundos = 0;
let estado = "pomodoro";
let playing = false;
let intervalo;

function cargar() {
    restarSegundo();
    restarMinuto();
    verificarCero();
    actualizarReloj();
    if (playing) {
        document.getElementById("clock").play();
    }
}

function restarSegundo() {
    let onlyone = true;
    if (segundos > 0 && onlyone) {
        segundos--;
        onlyone = false;
    }
}

function restarMinuto() { 
    if (segundos <= 0 && minutos > 0) {
        segundos = 59;
        minutos--;
    }
}

function verificarCero() {
    if (segundos <= 0 && minutos <= 0 && estado == "pomodoro") {
        pararTemporizador();
        chooseBreak();
        estado = "descanso";
        document.getElementById("alarm").play();
    } else if (segundos <= 0 && minutos <= 0 && estado == "descanso") {
        pararTemporizador();
        choosePomodoro();
        estado = "pomodoro";
        document.getElementById("alarm").play();
    }
}

function actualizarReloj() {
    let txtSegundos = segundos;
    let txtMinutos = minutos;

    if (segundos < 10) {
        txtSegundos = "0" + segundos;
    }

    if (minutos < 10) {
        txtMinutos = "0" + minutos;
    }

    document.getElementById("minutes").innerHTML = txtMinutos;
    document.getElementById("seconds").innerHTML = txtSegundos;
}

function alternate() {
    if (document.getElementById("alternate").innerHTML == "Comenzar") { 
        document.getElementById("clock").play();
    }
    if (playing) {
        pararTemporizador();
    } else {
        empezarTemporizador();
    }
}

function empezarTemporizador() {
    clearInterval(intervalo);
    intervalo = setInterval(cargar, 1000);
    playing = true;
    document.getElementById("alternate").innerHTML = "Pausar";
}

function pararTemporizador() {
    clearInterval(intervalo);
    playing = false;
    document.getElementById("alternate").innerHTML = "Seguir";
}

function reset() {
    if (estado == "pomodoro") {
        choosePomodoro();
    } else {
        chooseBreak();
    }
}

function choosePomodoro() {
    pararTemporizador();
    segundos = 0;
    minutos = 25;
    estado = "pomodoro";
    document.getElementById("alternate").innerHTML = "Comenzar";
    document.getElementById("clock").pause();
    document.getElementById("clock").currentTime = 0;
    document.getElementById("alarm").currentTime = 0;
    actualizarReloj();
    document.getElementById("pomodoro").style.animationName = "stay";
    document.getElementById("break").style.animationName = "null";
}

function chooseBreak() {
    pararTemporizador();
    segundos = 0;
    minutos = 5;
    estado = "descanso";
    document.getElementById("alternate").innerHTML = "Comenzar";
    document.getElementById("clock").pause();
    document.getElementById("clock").currentTime = 0;
    document.getElementById("alarm").currentTime = 0;
    actualizarReloj();
    document.getElementById("pomodoro").style.animationName = "null";
    document.getElementById("break").style.animationName = "stay";
}