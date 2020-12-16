// al click dovrò generare un numero random per l'utente
// poi genererò il secondo numero random
// confrontiamo i numeri
// se il primo è piu grande del secondo vince il primo
// se il secondo è piu grande del primo vince il secondo
// stampo il risultato


var play = document.getElementById("pulsante");

play.addEventListener('click',
function() {

  var primoNumero = Math.floor(Math.random() * 6) + 1;
  console.log(primoNumero);
  var secondoNumero = Math.floor(Math.random() * 6) + 1;
  console.log(secondoNumero);

  if (primoNumero > secondoNumero) {
    document.getElementById("risultato").innerHTML = "Hai vinto!";
  } else if (primoNumero < secondoNumero) {
    document.getElementById("risultato").innerHTML = "Hai perso!";
  } else {
    document.getElementById("risultato").innerHTML = "Pareggio!";
  }

  document.getElementById("risultato").className = "show";

});
