/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const risposta = {}; //memorizzo id delle risposte dell'utente



//ricomincia quiz
function reset(){
  for (const i in risposta) {
      delete risposta[i];
  }

  const risultato = document.querySelector('#risultato');
  risultato.classList.add('hidden');
  for (const box of boxes) {
      box.classList.remove('opacita');
      box.classList.remove('colora');
      box.addEventListener('click', selezione);
      box.querySelector('.checkbox').src = "images/unchecked.png";
  }

}

//mostra il risultaro
function mostrarisultato(){
  let scelta=risposta.one;

  if(risposta.one === risposta.two || risposta.one === risposta.three)
  scelta= risposta.one;
  if(risposta.two === risposta.one || risposta.two === risposta.three)
  scelta= risposta.two;
  if(risposta.three === risposta.one || risposta.three === risposta.two)
  scelta= risposta.three;

  const risultato = document.querySelector('#risultato');
  risultato.querySelector('h1').textContent = RESULTS_MAP[scelta].title;
  risultato.querySelector('p').textContent = RESULTS_MAP[scelta].contents;
  risultato.classList.remove('hidden');
  const button = document.querySelector('#button');
  button.addEventListener('click',reset);
}

//metti opacità
function opacita(selected){
  const iduser = selected.dataset.choiceId; //salvo id cosi so quale non rendere opaco
  const risposte = selected.parentNode.querySelectorAll('div'); //prendo il nodo superiore
  for (const risposta of risposte) {
      if(risposta.dataset.choiceId !== iduser){
      risposta.classList.remove('colora');
      risposta.classList.add('opacita');
      risposta.querySelector('.checkbox').src = "images/unchecked.png";
       
  }
  }
}


// selezione griglia
function selezione(event){ 
  const box = event.currentTarget; //
  box.querySelector('.checkbox').src = "images/checked.png";
  box.classList.add('colora'); //colora box
  box.classList.remove('opacita'); 
  opacita(box);//rendi opaco il resto
  risposta[box.dataset.questionId] = box.dataset.choiceId;// assegno al vett la personalità
  mostrarisultato();
  }


const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes) {
    box.addEventListener('click', selezione);
}