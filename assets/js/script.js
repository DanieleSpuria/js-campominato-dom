/************************************************************************ Sviluppo ***
1. generare 16 numeri random unici assegnandoli alle bombe;
2. se al click di una cella, l'id della cella è presente tra i numeri delle bombe, la cella diventa rossa e la partita termina, altrimenti la partita continua;
3. condizioni di fine partita.
4. esito, punteggio e overlay;
*************************************************************************************/



//*************************************************************************** Html ***
const btn = document.getElementsByClassName('btn')[0];
const griglia = document.getElementsByClassName('griglia')[0];
const btnReturn = document.getElementById('return');  
const btn100 = document.getElementById('100');
const btn81 = document.getElementById('81');
const btn49 = document.getElementById('49');



//************************************************************************ Bottoni ***
btnClick(btn100, btnReturn, 100, 'calc(100% / 10)', btn, griglia, '100%');
btnClick(btn81, btnReturn, 81, 'calc(100% / 9)', btn, griglia, '90%');
btnClick(btn49, btnReturn, 49, 'calc(100% / 7)', btn, griglia, '70%');



//************************************************************************************
const numBombs = 16;
let bombs = [];








//*********************************************************************** Funzioni ***
function cells(num, width, box2) {
  
  for (let i = 0; i < num; i++) {
    
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.width = width;
    cell.id = i + 1;
    box2.appendChild(cell);
    
      cell.addEventListener('click', function() {
          
        if (bombs.includes(parseInt(cell.id))) {
          cell.style.backgroundColor = 'red';
        } else {
          cell.classList.toggle('active');
        }
        
        console.log('cell.id', parseInt(i + 1));

      })
  } 
}

function btnClick(btn, btn1, num, width, box1, box2, widthBox2) {
  
  btn.addEventListener('click', function() {

    box1.classList.add('d-none');
    box2.innerHTML = '';
    box2.style.width = widthBox2;
    btn1.classList.remove('d-none');
    cells(num, width, box2);
    createBomb(num);
    // bombId();

    console.log(bombs);

  })  

  btn1.addEventListener('click', function() {
      
    box1.classList.remove('d-none');
    box2.innerHTML = '';
    bombs = [];
    btn1.classList.add('d-none');
    
  }) 
}

function createBomb (num) {

  let i = 1;
  while ( i <= numBombs ) {

    let bomb = getRandomNumber(1, num);

      if (!bombs.includes(bomb)){
        bombs.push(bomb);
        i++;
      }
  }
}

function getRandomNumber (min, max) {

  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;

}
