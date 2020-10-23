// genero un array con dentro diverse mail da verificare successivamente
var emailSaved = ['matteo@gmail.com', 'alessandro@gmail.com', 'francesco@gmail.com', 'flavio@gmail.com'];

// prendiamo l'elemento del DOM del tasto
var btnSearchEmailEl = document.getElementById("btnSearchEmail");

// puntiamo un elemento del DOM che ci servirà dopo per scrivere il messaggio
var emailMessageEl = document.getElementById('emailMessage');

// puntiamo l'input della email
var searchEmailEl = document.getElementById('searchEmail');

// Alla pressione del button facciamo partire il controllo della mail.
btnSearchEmailEl.addEventListener('click',
function() {

  searchEmail = searchEmailEl.value; // valorizzo il contenuto del input email in una variabile

  for(var i=0; i< emailSaved.length; i++){ // ciclo per controllare tutto il mio array con le email dentro

    var trovata = false; // ad inizio for valorizzo una variabile booleana come false per identificare che non ho trovato nessuna mail

    if (emailSaved[i] === searchEmail){ // controllo se email è uguale al input del utente
      emailMessageEl.innerHTML = 'Email Trovata!';
      trovata = true; // cambio valore al mio controllo di ricerca
      break; // Esco dal ciclo avendo trovato la mail.
    }

  }
  if (trovata == false) { // verifico se la mia ricerca di prima ha avuto un valore negarivo.
    emailMessageEl.innerHTML = 'Email non trovata!';
  }
}
);

//inizializziamo una variabile contenente il punteggio dei due giocatori
var userScore = 0;
var pcScore = 0;

// puntiamo gli elementi del DOM da modificare per visualizzare il risultato dei dadi
var userDiceEl = document.getElementById('userDice');
var pcDiceEl = document.getElementById('pcDice');
var victoryMessageEl = document.getElementById('victoryMessage');
var userScoreEl = document.getElementById('userScore');
var pcScoreEl = document.getElementById('pcScore');

//puntiamo il button del lancio dei Dadi
var btnDiceEl = document.getElementById('btnDice');

// al click del tasto facciamo partire il nostro codice di generazione dei dadi!
btnDiceEl.addEventListener('click',
function() {
  //calcolo i dadi con random e li metto dentro due variabili
  var userDice = (Math.floor(Math.random() * 6) + 1);
  var pcDice = (Math.floor(Math.random() * 6) + 1);
  // punto due variabili al DOM per visualizzare i dadi tirati
  userDiceEl.innerHTML = userDice;
  pcDiceEl.innerHTML = pcDice;

  // verifico quale dado ha vinto
  if (userDice > pcDice){
    victoryMessageEl.innerHTML = 'Hai vinto! Sei stato fortunato.. riprovaci!';
    userScore++; //aggiungo uno al punteggio del giocatore avendo vinto questo turno.
  } else if(userDice < pcDice){
    victoryMessageEl.innerHTML = 'Ha vinto il pc! Vincerà il pc sempre può riprovaci se vuoi perdere ancora!';
    pcScore++; // aggiungo uno al punteggio del pc avendo vinto questo turno
  } else {
    victoryMessageEl.innerHTML = 'Pareggio. Riprova!';
  }

  // faccio visualizzare il risultato aggiornato degli score
  userScoreEl.innerHTML = userScore;
  pcScoreEl.innerHTML = pcScore;
});
