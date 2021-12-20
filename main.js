const body = document.querySelector('body');
body.classList.add('body');
const container = document.querySelector('div');
container.classList.add('.container');

body.append(container);

const startIntroText = document.createElement('startIntro');//nog stylen.
startIntroText.innerText = 'Welkom bij deze Quiz'
container.append(startIntroText);

const startQuizBtn = document.querySelector('start-quiz-btn');
container.append(startQuizBtn);// onclick toggle onzichtbaar? en show quiz.
//Functie om button te hiden en quiz starten:

// const containerQuiz = document.querySelector('.container-quiz');
const containerQuiz = document.createElement('div');
containerQuiz.querySelector('container-quiz');
container.append(containerQuiz);

const containerAll = document.createElement('div');
containerAll.classList.add('container-all');
containerQuiz.append(containerAll);

const titleGame = document.createElement('h2');
titleGame.innerText = 'Math Problem';
containerAll.append(titleGame);

const countQuestions = document.createElement('p');
countQuestions.innerText = `Hier komt nog wat + ${countQuestions} dus.`;
containerAll.append(countQuestions);
console.log(countQuestions)

const printQuestionDiv = document.createElement('div');
printQuestionDiv.classList.add('print-question');
containerAll.append(printQuestionDiv);


// divAnswers.classList.add('answers');
// containerAll.append(divAnswers);

// const numberText = document.createElement('p');
// numberText.innerText = "1";
// divAnswers.append(numberText);

// const answerText = document.createElement('div');

const divAnswers = document.createElement('div');

function giveMeFiveRows(divAnwers, answerText, numberText) {
    for (let i = 0; i < 5; i++) {
        const divAnswers = document.createElement('div');
        divAnswers.classList.add('answers');
        containerAll.append(divAnswers);

        const numberText = document.createElement('p');
        numberText.innerText = "1";
        divAnswers.append(numberText);

        const answerText = document.createElement('p');
        answerText.innerText = " Antwoord 1 etc";
        divAnswers.append(answerText);
        
        
    }
    
}
giveMeFiveRows(divAnswers)

const btnPrevious = document.createElement('button');
btnPrevious.classList.add('btn-prev');
btnPrevious.innerText = 'Vorige';
containerAll.appendChild(btnPrevious);
// btnPrevious.addEventListener('click', clickLeft);

const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
btnNext.innerText = 'Volgende';
containerAll.appendChild(btnNext);
// btnNext.addEventListener('click', clickRight);



// function constructButtons() {
//     const prev_btn = document.createElement('button');
//     prev_btn.classList.add('prev_btn', 'btn');
//     prev_btn.innerText = 'vorrige';
//     container.appendChild(prev_btn);
//     prev_btn.onclick = () => { clickPrev() }

//     const next_btn = document.createElement('button');
//     next_btn.classList.add('next_btn', 'btn');
//     next_btn.innerText = 'volgende';
//     container.appendChild(next_btn);
//     next_btn.onclick = () => { clickNext() }
// }









// var questionBox = document.createElement("div");
// questionBox.setAttribute("id", "questionHolder");
// document.body.appendChild(questionBox);
// var questionElement = document.createElement("h3");
// questionElement.setAttribute("id", "question");
// var questionText = document.createTextNode("Is the sky blue?");
// questionElement.appendChild(questionText);
// questionBox.appendChild(questionElement);




// startQuizBtn.addEventListener('click', startQuiz);


// let newElement = document.createElement('div');
// console.dir(newElement);
