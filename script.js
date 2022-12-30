'use strict';


const shooter1 = document.querySelector('.shooter-1');
const shooter2 = document.querySelector('.shooter-2');
const score1 = document.getElementById('score-1');
const score2 = document.getElementById('score-2');



const btnNew = document.querySelector('.btn-newGame');
const btnRound = document.querySelector('.btn-round');
const btnShoot1 = document.querySelector('.btn-Shoot1');
const btnShoot2 = document.querySelector('.btn-Shoot2');

const msg1 = document.querySelector('.message');
const msg2 = document.querySelector('.message2');

const number = document.querySelector('.number');
const number2 = document.querySelector('.number2');
const newNumber = document.querySelector('.power');

let score, activeShooter, playing, won = 0, won1 = 0;
let round = 1;
let over = false;
let random = Math.trunc(Math.random) * 6;




const init = function () {
  score = [20, 20];
  activeShooter = 0;
  playing = true;
  random = Math.trunc(Math.random() * 6);


  btnShoot1.classList.remove('hidden');
  btnShoot2.classList.add('hidden');

  score1.textContent = score[0];
  score2.textContent = score[1];

  newNumber.textContent = 'Power';



}

init();

const switchShooter = function () {

  activeShooter = activeShooter === 0 ? 1 : 0;
  shooter1.classList.toggle('shooter-active');
  shooter2.classList.toggle('shooter-active');
}

const winner1 = function () {
  won++;
  number.textContent = won;
  if (won > 2) {
    displayMessage("Shooter 1 wins tournament");
    playing = false;
    over = false;


  }

}
const winner2 = function () {
  won1++;
  number2.textContent = won1;
  if (won1 > 2) {
    displayMessage("Shooter 2 wins tournament");

    playing = false;
    over = false;

  }

}

const displayMessage = function (message) {
  msg1.textContent = message;
}




btnShoot1.addEventListener('click', function () {



  if (playing) {


    activeShooter === 0;

    score2.textContent = score[1] - random;
    score[1] = score[1] - random;
    newNumber.textContent = random;
    random = Math.trunc(Math.random() * 6);
    switchShooter();
    if (score[1] <= 0) {

      msg2.textContent = `Shooter 1 won round ${round}`;
      over = true;
      msg2.classList.remove('hidden');
      score2.classList.add('hidden');
      score1.classList.add('hidden');
      winner1();
      playing = false;
    }
    btnShoot2.classList.remove('hidden');
    btnShoot1.classList.add('hidden');
  }


});

btnShoot2.addEventListener('click', function () {



  if (playing) {
    activeShooter === 1;
    score1.textContent = score[0] - random;
    score[0] = score[0] - random;
    newNumber.textContent = random;
    random = Math.trunc(Math.random() * 6);

    switchShooter();
    if (score[0] <= 0) {
      msg2.textContent = `Shooter 2 won round ${round}`;
      over = true;
      msg2.classList.remove('hidden');
      score1.classList.add('hidden');
      score2.classList.add('hidden');
      winner2();


      playing = false;
    }

    btnShoot2.classList.add('hidden');
    btnShoot1.classList.remove('hidden');
  }


});




btnRound.addEventListener('click', function () {

  if (over) {

    if (won > 0 || won1 > 0) {


      round++;
      displayMessage(`Round ${round}`);
      init();
      score1.classList.remove('hidden');
      score2.classList.remove('hidden');
      over = false;
    }
  }
});


btnNew.addEventListener('click', function () {
  init();
  displayMessage("Round 1");

  round = 1;
  won = 0;
  won1 = 0;



  msg2.classList.add('hidden');

  document.querySelector('.number').textContent = won;
  document.querySelector('.number2').textContent = won1;

  score1.classList.remove('hidden');
  score2.classList.remove('hidden');
});

var x = 5;
var y = x++;
console.log(y); s







