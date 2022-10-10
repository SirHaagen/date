
let hora= document.querySelector(".hora");
let minuto= document.querySelector(".minuto");
let segundo= document.querySelector(".segundo");
let horas12= document.querySelector(".ampm");

function horaActual(){
  let fecha= new Date();
  let ampm= "a.m.";
  let timeHora= fecha.getHours();

  if(timeHora<12) ampm= "a.m.";
  else if(timeHora>12){
    timeHora-=12; 
    ampm= "p.m.";
  } 
  if(timeHora==0) timeHora=12;
  if(timeHora==12){
    if(ampm== "a.m.") ampm= "p.m.";
    else ampm= "a.m.";
  }
  if(timeHora<10) timeHora= "0"+timeHora;

  let timeMinutos= fecha.getMinutes()<10 ? "0"+fecha.getMinutes() : fecha.getMinutes();
  let timeSegundos= fecha.getSeconds()<10 ? "0"+fecha.getSeconds() : fecha.getSeconds();

  hora.textContent= timeHora;
  minuto.textContent= timeMinutos;
  segundo.textContent= timeSegundos;
  horas12.textContent= ampm;
}

horaActual(); //Lo ejecuto de entrada para que desde el principio aparezca información

setInterval(horaActual,1000);