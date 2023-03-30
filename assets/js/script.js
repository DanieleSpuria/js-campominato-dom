/************************************************************************ Sviluppo ***

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



//*********************************************************************** Funzioni ***
function cells(num, width, box2) {
  
  for (let i = 0; i < num; i++) {
    
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.width = width;
    cell.id = i + 1;
    box2.appendChild(cell);
    
    cell.addEventListener('click', function() {
      
      cell.classList.toggle('active');
      console.log(cell.id);

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

  })  

  btn1.addEventListener('click', function() {
      
    box1.classList.remove('d-none');
    box2.innerHTML = '';
    btn1.classList.add('d-none');
    
  }) 
}