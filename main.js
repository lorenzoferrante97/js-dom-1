// workflow
// 1. creo variabili recuperando contenuto html che mi serve
// 2. creo evento click con operazioni all'attivazioen dell'evento
//      - cambio immagine

let lamp = document.getElementById("lamp");
let btn = document.getElementById("toggleLamp");
let background = document.getElementById("lighting");

background.style.backgroundColor = "#000000";

btn.addEventListener("click", () => {
    lamp.innerHTML = "<img src='img/yellow_lamp.png' alt='lampadina accesa'>";
    background.style.backgroundColor = "#FFEFD5";
})