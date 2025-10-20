// Yazmin Alfaro 10/19/25 
// Learned from https://javascript30.com/Whack A Mole
// Changed the random time to be longer
  
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(300, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => { 
  hole.classList.remove('up');
  if(!timeUp) peep();
  }, time);
}  

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 30000)
}

function bonk(e) { 
  if(!e.isTrusted) return; // cheater!
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));