// workflow
// 1. creo variabili recuperando contenuto html che mi serve
// 2. creo evento click con operazioni all'attivazioen dell'evento
//      - cambio immagine

let lamp = document.getElementById("lamp");
let btn = document.getElementById("toggleLamp");

btn.addEventListener("click", () => {
    lamp.innerHTML = "<img src='img/yellow_lamp.png' alt='lampadina accesa'>";
})