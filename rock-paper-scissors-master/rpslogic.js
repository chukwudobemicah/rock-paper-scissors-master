// import { userValue } from './script.js';
// import { ComputerValue } from './script.js';
export const rpsLogic = function () {
  if ((userValue === 'paper') & (ComputerValue === 'scissors')) {
    you.textContent = 'You Lose';
  }
  if ((userValue === 'paper') & (ComputerValue === 'rock')) {
    you.textContent = 'You win';
  }
  if ((userValue === 'paper') & (ComputerValue === 'paper')) {
    you.textContent = 'draw';
  }
  if ((userValue === 'rock') & (ComputerValue === 'scissors')) {
    you.textContent = 'You win';
  }
  if ((userValue === 'rock') & (ComputerValue === 'paper')) {
    you.textContent = 'You Lose';
  }
  if ((userValue === 'rock') & (ComputerValue === 'rock')) {
    you.textContent = 'Draw';
  }
  if ((userValue === 'scissors') & (ComputerValue === 'rock')) {
    you.textContent = 'You Lose';
  }
  if ((userValue === 'scissors') & (ComputerValue === 'paper')) {
    you.textContent = 'You win';
  }
  if ((userValue === 'scissors') & (ComputerValue === 'scissors')) {
    you.textContent = 'draw';
  }
};
//   const firstMarkUp = `   <div id="first-choice" data-value="paper" data-num="1" class="rps__container-paper rps">
//   <p><img src="/images/icon-paper.svg" alt="paper"></p>
//   <div class="user-pick hidden">You Picked</div>
// </div>`;
//   const secondMarkUp = ` <div id="second-choice" data-value="scissors" data-num="2" class="rps__container-scissors rps">
//   <p><img src="/images/icon-scissors.svg" alt="scissors"></p>
//   <div class="house-pick hidden">The house Picked</div>
// </div>`;
//   firstChoice.insertAdjacentHTML('beforeend', firstMarkUp);
//   secondChoice.insertAdjacentHTML('beforeend', secondMarkUp);
