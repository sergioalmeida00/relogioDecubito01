let digitalElement = document.querySelector('.digital');
let digitalSegundos = document.querySelector('.p_s');
let digitalMinutos = document.querySelector('.p_m');
let digitalHoras = document.querySelector('.p_h');
let infoPosicao = document.querySelector('.info h2');


function showTime() {
    let timeElement = new Date();
    digitalElement.innerHTML = `${formatTime(timeElement.getHours())}:${formatTime(timeElement.getMinutes())}:${formatTime(timeElement.getSeconds())}`;
    let degSegundos = ((360 / 60) * timeElement.getSeconds()) - 90;
    let degMinutos = ((360 / 60) * timeElement.getMinutes()) - 90;
    let degHoras = ((360 / 12) * timeElement.getHours()) - 90;
    digitalSegundos.style.transform = `rotate(${degSegundos}deg)`;
    digitalMinutos.style.transform = `rotate(${degMinutos}deg)`;
    digitalHoras.style.transform = `rotate(${degHoras}deg)`;

    verificaPosicao(timeElement.getHours());
}

function verificaPosicao(hora) {
    if (hora == 12 || hora == 00) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Lateral Esquerda !";
    } else if (hora == 13 || hora == 01) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Dorsal !"
    } else if (hora == 14 || hora == 02) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Dorsal !"
    } else if (hora == 15 || hora == 03) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Lateral Esquerda !"
    } else if (hora == 16 || hora == 04) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Lateral Esquerda !"
    } else if (hora == 17 || hora == 05) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Dorsal !"
    } else if (hora == 18 || hora == 06) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Dorsal !"
    } else if (hora == 19 || hora == 07) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Lateral Direita !"
    } else if (hora == 20 || hora == 08) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Lateral Direita !"
    } else if (hora == 21 || hora == 09) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Dorsal !"
    } else if (hora == 22 || hora == 10) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Dorsal !"
    } else if (hora == 23 || hora == 11) {
        infoPosicao.innerHTML = "Colocar O paciente na Posição Lateral Esquerda !"
    } else {
        infoPosicao.innerHTML = "Error"
    }



}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(showTime, 1000);

showTime();