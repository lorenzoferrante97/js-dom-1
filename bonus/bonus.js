// workflow
// 1. creo variabili recuperando contenuto html che mi serve
// 2. creo evento click con operazioni all'attivazioen dell'evento
//      - cambio immagine

let lampOff = document.getElementById("lampOff");
let lampOn = document.getElementById("lampOn");
let btn = document.getElementById("toggleLamp");
let background = document.getElementById("lighting");

lampOn.style.display = "none";

// lamp.innerHTML = "<img src='../img/white_lamp.png' alt='lampadina spenta'>";
background.style.backgroundColor = "#000000";

btn.addEventListener("click", () => {

    if (btn.innerHTML == "Accendi") {
        lampOn.style.display = "block";
        lampOff.style.display = "none";
        background.style.backgroundColor = "#FFEFD5";
        btn.innerHTML = "Spegni";
    } else if (btn.innerHTML == "Spegni") {
        lampOn.style.display = "none";
        lampOff.style.display = "block";
        background.style.backgroundColor = "#000000";
        btn.innerHTML = "Accendi";
    }
})