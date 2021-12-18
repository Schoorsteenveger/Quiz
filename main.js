const body = document.querySelector('body');

const container = document.querySelector('.container');
const startQuizBtn = document.querySelector('.start-quiz-btn');
body.append(container);

const startIntro = document.createElement('startIntro');//nog stylen.
startIntro.innerText = 'Welkom bij deze Quiz'
container.append(startIntro)
// container.textContent = 'Welkom bij deze Quiz';
container.append(startQuizBtn);

