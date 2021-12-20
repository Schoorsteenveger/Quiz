const body = document.querySelector('body');
body.classList.add('body');
const container = document.querySelector('div');
container.classList.add('.container');

body.append(container);

const startIntroText = document.createElement('startIntro');//nog stylen.
startIntroText.innerText = 'Welkom bij deze Quiz'
container.append(startIntroText);

const startQuizBtn = document.querySelector('start-quiz-btn');
container.append(startQuizBtn);

// startQuizBtn.addEventListener('click', startQuiz())
    
// onclick toggle onzichtbaar? en show quiz.
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
const answer = document.createElement('p');

const divAnswers = document.createElement('div');

// 5 rijen aanmaken met nummers per vraag en de antwoorden.
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

// Array of Answers & questions
const questions = [
    {
        question1: ["What is 49 - 32", "13", "17", "-17", "16", "697"],
        answer: "17"
    },
    {
        question2: ["What is 70 - 14", "18", "79", "56", "32", "34"],
        answer: "56"
    },
    {
        question3: ["What is 80 -15", "74", "65", "93", "40", "975"],
        answer: "65"
    },
    {
        question4: ["What is 10 - 20", "-350", "-15", "-10", "-34"],
        answer: "-10"
    },
    {
        question5: ["What is 56 + 11", "102", "37", "44", "67", "50"],
        answer: "67"
    },
    {
        question5: ["What is 21 - 16", "170", "18", "5", "2", "26"],
        answer: "5"
    }
]
console.log(questions)

// Loop through questions
// function startQuiz() {
    
// }

// Score to endScore
let score = 0;

for (let i = 0; i < questions.length; i++){
    let userResponse = questions[i].question1;
    if (userResponse == questions[i].answer) {
        score++;
        console.log("Goed antwoord") // div groen kleuren
    } else {
       console.log("Sorry!"); //div rood kleuren + goede antwoord in groen tonen.
    } 
}
 


// function constructButtons() {
//     const prev_btn = document.createElement('button');
//     prev_btn.classList.add('prev_btn', 'btn');
//     prev_btn.innerText = 'vorige';
//     container.appendChild(prev_btn);
//     prev_btn.onclick = () => { clickPrev() }

//     const next_btn = document.createElement('button');
//     next_btn.classList.add('next_btn', 'btn');
//     next_btn.innerText = 'volgende';
//     container.appendChild(next_btn);
//     next_btn.onclick = () => { clickNext() }
// }














// let newElement = document.createElement('div');
// console.dir(newElement);
