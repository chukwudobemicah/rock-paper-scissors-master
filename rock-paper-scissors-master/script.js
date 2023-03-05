const rulesBtn = document.querySelector('.rules');
const rulesContainer = document.querySelector('.rules-container');
const cancel = document.querySelector('.cancel');
const paper = document.querySelector('.rps__container-paper');
const scissors = document.querySelector('.rps__container-scissors');
const rock = document.querySelector('.rps__container-rock');
const pickOne = document.querySelectorAll('.pick');
const wDL = document.querySelector('.wdl');
const playAgain = document.querySelector('.play-again');
const firstChoice = document.querySelector('#first-choice');
const secondChoice = document.querySelector('#second-choice');
const thirdChoice = document.querySelector('#third-choice');
const score = document.querySelector('#score');
const overlay = document.querySelector('.overlay');
const results = document.querySelector('.results');
const rps = document.querySelectorAll('.rps');
const rpsContainerPicked = document.querySelector('.rps__container-picked');
const rpsContainerPick = document.querySelector('.rps__container-pick');
const rpsSection = document.querySelector('.rps-section');
// show rules
// rules-
rulesBtn.addEventListener('click', function () {
  rulesContainer.classList.toggle('hidden');
  rulesContainer.classList.remove('scale-down');
  rulesContainer.classList.toggle('scale-up');
  overlay.classList.toggle('hidden');
});

// rules-

// remove rules
cancel.addEventListener('click', function () {
  rulesContainer.classList.remove('scale-up');
  rulesContainer.classList.add('scale-down');
  overlay.classList.add('hidden');
  if (window.matchMedia('max-width:700px').matches) {
    setTimeout(() => rulesContainer.classList.add('hidden'), 250);
  } else {
    rulesContainer.classList.add('hidden');
  }
});

overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  rulesContainer.classList.add('hidden');
});

// get user value
let userValue;
rps.forEach(el => {
  el.addEventListener('click', function () {
    userValue = el.getAttribute('data-value');
  });
});

// when you click on a rps
pickOne.forEach(el => {
  el.addEventListener('click', function () {
    // input user value
    rpsContainerPick.classList.add('hidden');
    rpsContainerPicked.classList.remove('hidden');
    const firstMarkUp = `<div data-value="${userValue}" class="rps__container-${userValue} ">
    <p><img src="/images/icon-${userValue}.svg" alt="${userValue}"></p>
    <div>You Picked</div>
  </div> `;
    firstChoice.innerHTML = '';
    firstChoice.insertAdjacentHTML('beforeend', firstMarkUp);
    thirdChoice.classList.add('hidden');

    let ComputerValue;
    const randomNum = Math.trunc(Math.random() * 3) + 1;
    if (randomNum === 1) {
      ComputerValue = 'paper';
    } else if (randomNum === 2) {
      ComputerValue = 'scissors';
    } else {
      ComputerValue = 'rock';
    }

    // input computer value
    const secondMarkUp = ` <div data-value="${ComputerValue}" class="rps__container-${ComputerValue} rps">
        <p><img src="/images/icon-${ComputerValue}.svg" alt="${ComputerValue}"></p><div class="house-pick">House Picked</div>
        </div>`;

    const rpsLogic = function (userVal, compVal) {
      if ((userValue === 'paper') & (ComputerValue === 'scissors')) {
        wDL.textContent = 'you lose😢';
      }
      if ((userValue === 'paper') & (ComputerValue === 'rock')) {
        wDL.textContent = 'you win🎉🥳';
      }
      if ((userValue === 'paper') & (ComputerValue === 'paper')) {
        wDL.textContent = 'draw⚒⚔';
      }
      if ((userValue === 'rock') & (ComputerValue === 'scissors')) {
        wDL.textContent = 'you win🎉🥳';
      }
      if ((userValue === 'rock') & (ComputerValue === 'paper')) {
        wDL.textContent = 'you lose😢';
      }
      if ((userValue === 'rock') & (ComputerValue === 'rock')) {
        wDL.textContent = 'draw⚒⚔';
      }
      if ((userValue === 'scissors') & (ComputerValue === 'rock')) {
        wDL.textContent = 'you lose😢';
      }
      if ((userValue === 'scissors') & (ComputerValue === 'paper')) {
        wDL.textContent = 'you win🎉🥳';
      }
      if ((userValue === 'scissors') & (ComputerValue === 'scissors')) {
        wDL.textContent = 'draw⚒⚔';
      }
    };

    secondChoice.innerHTML = '';
    setTimeout(() => {
      rpsSection.style.height = '15rem';
      results.classList.remove('add-margin');
      // rules-
      wDL.classList.remove('hidden');
      // rules-
      playAgain.classList.remove('hidden');
      const housePick = document.querySelector('.house-pick');
      // rules-
      rpsLogic();
      +score.textContent;
      secondChoice.insertAdjacentHTML('beforeend', secondMarkUp);

      // checks if the user wins
      // rules-
      if (wDL.textContent === 'you win🎉🥳') {
        score.textContent = +score.textContent + 1;
      }

      // checks if the user loses
      // rules-
      if (wDL.textContent === 'you lose😢' && score.textContent !== '0') {
        score.textContent = +score.textContent - 1;
      }
    }, 1000);

    // compare results
  });
});

// rules-

playAgain.addEventListener('click', function () {
  results.classList.add('add-margin');
  rpsContainerPick.classList.remove('hidden');
  rpsContainerPicked.classList.add('hidden');
  firstChoice.innerHTML = '';
  secondChoice.innerHTML = '';
  thirdChoice.classList.remove('hidden');
  wDL.classList.add('hidden');
  playAgain.classList.add('hidden');
});
