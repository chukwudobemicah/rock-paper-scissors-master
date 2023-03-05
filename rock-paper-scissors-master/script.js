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
const notification = document.querySelector('.notification ');

let audioLose = new Audio();
audioLose.src = './audio/evil-laugh-49831.mp3';
audioLose.loop = false;
audioLose.volume = 1;
let audioSuccess = new Audio();
audioSuccess.src = './audio/success-1-6297.mp3';
audioSuccess.loop = false;
audioSuccess.volume = 1;
let audioDraw = new Audio();
audioDraw.src = './audio/stingers-001-6294.mp3';
audioDraw.loop = false;
audioDraw.volume = 1;
let audioClick = new Audio();
audioClick.src = './audio/interface-124464.mp3';
audioClick.loop = false;
audioClick.volume = 1;
// audioClick.duration = 10;
// show rules
rulesBtn.addEventListener('click', function () {
  rulesContainer.classList.toggle('hidden');
  rulesContainer.classList.remove('scale-down');
  rulesContainer.classList.toggle('scale-up');
  overlay.classList.toggle('hidden');
  audioLose.play();
});

// remove rules
cancel.addEventListener('click', function () {
  rulesContainer.classList.remove('scale-up');
  rulesContainer.classList.add('scale-down');
  overlay.classList.add('hidden');
  if (window.matchMedia('max-width:700px').matches) {
    setTimeout(() => rulesContainer.classList.add('hidden'), 300);
  } else {
    rulesContainer.classList.add('hidden');
  }
  rulesContainer.classList.add('hidden');
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
    audioClick.play();
    // input user value
    rpsContainerPick.classList.add('hidden');
    rpsContainerPicked.classList.remove('hidden');
    const firstMarkUp = `<div data-value="${userValue}" class="rps__container-${userValue} ">
    <div><p><img src="/images/icon-${userValue}.svg" alt="${userValue}"></p></div>
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
    <div><p><img src="/images/icon-${ComputerValue}.svg" alt="${ComputerValue}"></p></div><div class="house-pick">House Picked</div>
        </div>`;

    const rpsLogic = function (userPick, compPick, result) {
      if ((userValue === userPick) & (ComputerValue === compPick)) {
        wDL.textContent = result;
      }
    };

    secondChoice.innerHTML = '';
    setTimeout(() => {
      rpsSection.style.height = '15rem';
      results.classList.remove('add-margin');

      wDL.classList.remove('hidden');

      playAgain.classList.remove('hidden');

      // paper
      rpsLogic('paper', 'rock', 'you win');
      rpsLogic('paper', 'scissors', 'you lose');
      rpsLogic('paper', 'paper', 'draw⚒');
      // scissors
      rpsLogic('scissors', 'paper', 'you win');
      rpsLogic('scissors', 'rock', 'you lose');
      rpsLogic('scissors', 'scissors', 'draw⚒');
      // rock
      rpsLogic('rock', 'scissors', 'you win');
      rpsLogic('rock', 'paper', 'you lose');
      rpsLogic('rock', 'rock', 'draw⚒');
      +score.textContent;
      secondChoice.insertAdjacentHTML('beforeend', secondMarkUp);

      // update score if the user wins
      if (wDL.textContent === 'you win') {
        score.textContent = +score.textContent + 1;
      }

      // update score if the user loses
      if (wDL.textContent === 'you lose' && score.textContent !== '0') {
        score.textContent = +score.textContent - 1;
      }

      // update notif
      const randomNotNum = Math.trunc(Math.random() * 8) + 1;
      const winNotification = [
        '',
        `don't get too comfortable`,
        'keep going',
        'i see a soldier in you👮‍♂️',
        `take your crown👑`,
        `You've earned my compliments👍`,
        'Hurray🥳',
        'you deserve this 🏆',
        `Feels good`,
        'That was good!👏',
      ];
      const losesNotification = [
        '',
        'are you even trying?',
        'I laugh!',
        'i can do better in my sleep',
        `You're losing scores`,
        `i'm sure you can do better than that`,
        'just look at the score board',
        `You're boring me`,
        `just quit the game!`,
        `I take back my compliments👎`,
      ];
      const drawNotification = [
        '',
        `you're playing with a bot🙄`,
        'do better!',
        'we both knew it was going to be a draw',
        'better than a loss🤷‍♀️',
        'at least its a draw i guess🤷‍♀️',
        'not too bad',
        'keep going!',
        `Drawing is not good enough`,
        'pick paper next!',
      ];
      if (wDL.textContent === 'you win') {
        audioSuccess.play();
        notification.textContent = winNotification[randomNotNum];
        notification.classList.remove('hidden');
        notification.classList.remove('translate-right');
        setTimeout(() => {
          notification.classList.add('translate-right');
          setTimeout(() => notification.classList.add('hidden'), 20);
        }, 1000);
      }
      if (wDL.textContent === 'you lose') {
        audioLose.play();
        notification.textContent = losesNotification[randomNotNum];
        notification.classList.remove('hidden');
        notification.classList.remove('translate-right');
        setTimeout(() => {
          notification.classList.add('translate-right');
          setTimeout(() => notification.classList.add('hidden'), 20);
        }, 1000);
      }
      if (wDL.textContent === 'draw⚒') {
        audioDraw.play();
        notification.textContent = drawNotification[randomNotNum];
        notification.classList.remove('hidden');
        notification.classList.remove('translate-right');
        setTimeout(() => {
          notification.classList.add('translate-right');
          setTimeout(() => notification.classList.add('hidden'), 20);
        }, 1000);
      }
    }, 1000);

    // compare results
  });
});

playAgain.addEventListener('click', function () {
  audioClick.pause();
  audioClick.currentTime = 0;
  audioSuccess.pause();
  audioSuccess.currentTime = 0;
  audioLose.pause();
  audioLose.currentTime = 0;
  audioDraw.pause();
  audioDraw.currentTime = 0;
  results.classList.add('add-margin');
  rpsContainerPick.classList.remove('hidden');
  rpsContainerPicked.classList.add('hidden');
  firstChoice.innerHTML = '';
  secondChoice.innerHTML = '';
  thirdChoice.classList.remove('hidden');
  wDL.classList.add('hidden');
  playAgain.classList.add('hidden');
});
