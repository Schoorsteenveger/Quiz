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
containerQuiz.classList.add('.container-quiz');
container.append(containerQuiz);

const containerAll = document.createElement('div');
containerAll.classList.add('container-all');
containerQuiz.append(containerAll);

const titleGame = document.createElement('h2');
titleGame.innerText = 'Math Problem';
containerAll.append(titleGame);

const countQuestions = document.createElement('p');
countQuestions.innerText = `${countQuestions} ... /6`;
containerAll.append(countQuestions);
console.log(countQuestions)// 

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




// 5 rijen aanmaken met nummers per vraag en de antwoorden.
function giveMeFiveRows(divAnwers, answerText, numberBol) {
    for (let i = 0; i < 5; i++) {
        const divAnswers = document.createElement('div');
        divAnswers.classList.add('answers');
        containerAll.append(divAnswers);

        const numberBol = document.('p');
        divAnswers.classList.add('p');
        divAnswers.append(numberBol);


        // const answerText = document.createElement('p');
        // answerText.innerText = " Antwoord 1 etc";
        // divAnswers.append(answerText);
    }
    
}
giveMeFiveRows(divAnswers)
// buttons next & Prev.

const btnPrevious = document.createElement('button');
btnPrevious.classList.add('btn-prev');
btnPrevious.innerText = 'Vorige';
containerAll.appendChild(btnPrevious);
btnPrevious.addEventListener('click', emptyDivs());

const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
btnNext.innerText = 'Volgende';
containerAll.appendChild(btnNext);
btnNext.addEventListener('click',emptyDivs());

// Array of Answers & questions
const questions = [
    {
        question: "What is 49 - 32",
        options: ["13", "17", "-17", "16", "697"],
        answer: "17"
    },
    {
        question: ["What is 70 - 14"],
        options: ["18", "79", "56", "32", "34"],
        answer: "56"
    },
    {   
        question: ["What is 80 -15"],
        options: ["74", "65", "93", "40", "975"],
        answer: "65"
    },
    {
        question: ["What is 10 - 20"],
        options: ["-350", "-15", "-10", "-34"],
        answer: "-10"
    },
    {
        question: ["What is 56 + 11"],
        options: ["102", "37", "44", "67", "50"],
        answer: "67"
    },
    {
        question: ["What is 21 - 16"],
        options: ["170", "18", "5", "2", "26"],
        answer: "5"
    }
]
console.log(questions)

function addQuestionsDom() {
    const questionDiv = document.querySelector('.print-question');
    const answersDivs = document.querySelectorAll('.answers'); // node-list loop nodig
    questionDiv.innerText = questions[0].question
    for (let i = 0; i < answersDivs.length; i++) {
        answersDivs[i].innerText = questions[0].options[i];
   
    }

}
addQuestionsDom();

//Leeg answer divs met data
// function emptyAnswerDivs("click", ) {
// if answersDivs[i]clickNext.appendChild[""];
// }

const emptyAnswerDivs = document.querySelector('.container-all');

function emptyDivs() {
    emptyAnswerDivs.innerHTML = "";
}



// Loop through questions
// function startQuiz() {
    
// }

// Score to endScore
// let score = 0;

// for (let i = 0; i < questions.length; i++){
//     console.log(userResponse, questions[0])
//     let userResponse = questions[0].options;
//     if (userResponse == questions[0].options) {
//         score++;
//         console.log("Goed antwoord") // div groen kleuren
//     } else {
//        console.log("Sorry!"); //div rood kleuren + goede antwoord in groen tonen.
//     } 
// }
 















// let newElement = document.createElement('div');
// console.dir(newElement);
