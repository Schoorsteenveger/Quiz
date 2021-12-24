const container = document.querySelector(".container");
container.classList.add('.container');

const containerQuiz = document.createElement('div');
containerQuiz.classList.add('.container-quiz');

const containerAll = document.createElement('div');
containerAll.classList.add('container-all');

const startQuizBtn = document.createElement('button');
startQuizBtn.classList.add('start-quiz-btn');
// btnStartQuiz.classList.add('hide');
startQuizBtn.innerText = "Start";
container.append(startQuizBtn);

const startIntroText = document.createElement('startIntro');//nog stylen.
startIntroText.innerText = 'Welkom bij deze Quiz'
// startIntroText.classList = ('hide');
container.append(startIntroText);

const titleGame = document.createElement('h2');
titleGame.innerText = 'Math Problem';

const countQuestions = document.createElement('p');
countQuestions.innerText = `${countQuestions}... /6`;
// containerAll.append(countQuestions);

const printQuestionDiv = document.createElement('div');
printQuestionDiv.classList.add('print-question');

const divAnswers = document.createElement('div');
divAnswers.classList.add('answers');
divAnswers.querySelector('.answers');
console.log(divAnswers);

const answerNumbers = document.createElement('p');
answerNumbers.querySelector('.p');
answerNumbers.classList.add('p'); //overbrengen nog

const btnPrevious = document.createElement('button');
btnPrevious.classList.add('btn-prev');
btnPrevious.innerText = 'Vorige';
// containerAll.appendChild(btnPrevious);
// btnPrevious.addEventListener('click', emptyDivs());

const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
btnNext.innerText = 'Volgende';
// containerAll.appendChild(btnNext);
// btnNext.addEventListener('click',emptyDivs());

// Start Quiz
startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startQuizBtn.classList.add('hide');
    startIntroText.classList = ('hide');
    containerQuiz.classList.remove("hide");
    container.append(containerQuiz);
    containerQuiz.append(containerAll, btnPrevious, btnNext);
    containerAll.append(titleGame, countQuestions, printQuestionDiv, divAnswers);
    Index = 0;
    addQuestionsDom(0);
    
}

// let currentQuestionIndex = 0;
// let score = 0; //counter score op index - 1 of + bij cecken antw.
// let countQuestions = 0; // counter shows 1/6 etc

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
        question: ["What is 80 - 15"],
        options: ["74", "65", "93", "40", "975"],
        answer: "65"
    },
    {
        question: ["What is 10 - 20"],
        options: ["-350", "-15", "-10", "-34", "33"],
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

// add quiz to dom

function addQuestionsDom(index) {
    const printQuestionDiv = document.querySelector('.print-question');
    const divAnswers = document.querySelectorAll('.answers'); // node-list loop nodig
    console.log(printQuestionDiv);
    // console.log(questions[index].question);
    console.log(questions);
    printQuestionDiv.innerText = questions[index].question
    console.log(questions[1,2,3].question)
    // console.log(questionDiv.innerText);
    // console.log(questions[1].question);
    for (let i = 0; i < divAnswers.length; i++) {
        
        divAnswers[i].innerText = questions[index].options[i];

    }
    giveMeFiveRows()
    
}
addQuestionsDom(); // Hergebruiken in functie om index currentquestion te komen.

//  5 rijen aanmaken met nummers per vraag en de antwoorden.
function giveMeFiveRows() {
    for (let i = 0; i < 5; i++) {
        const divAnswers = document.createElement('div');
        divAnswers.classList.add('answers');
        containerAll.append(divAnswers);

    }
}
giveMeFiveRows();

// Index vragen in de dom zetten
// function addQuestionsDom() {
//     const questionDiv = document.querySelector('.print-question');
//     const divAnswers = document.querySelectorAll('.answers'); // node-list loop nodig
//     console.log(divAnswers)
//     questionDiv.innerText = allQuestions[0].question;

//     console.log(allQuestions);
//     // console.log(allQuestions[1].question);
//     for (let i = 0; i < divAnswers.length; i++) {
//         divAnswers.innerText = allQuestions[1].options;

//     }
//     giveMeFiveRows();
// }
// addQuestionsDom();
// console.log(addQuestionsDom()); // Hergebruiken in functie om index currentquestion te komen.
btnNext.addEventListener("click", getNextQuizQuestion);

// function getNextQuizQuestion() {
//     // laad juiste data zoals in startquiz
//     startQuizBtn.classList.add('hide');
//     startIntroText.classList = ('hide');
//     containerQuiz.classList.remove("hide");
    
//     // doe dingen

//     const divAnswers = document.querySelectorAll('.answers');
//     const printQuestionDiv = document.querySelector('.print-question');
//     // append questiondiv
//     container.append(containerQuiz);
//     containerQuiz.append(containerAll, btnNext, btnPrevious);
//     containerAll.append(titleGame, countQuestions, printQuestionDiv, divAnswers);
    
//     console.log(printQuestionDiv);
//     printQuestionDiv.classList.add('answers');
//     containerAll.append(printQuestionDiv);
//     // for loop -->
//     for (i = 0; i < printQuestionDiv.length; i++){
//         printQuestionDiv.innerText = questions[i]questions;
//     };

    
//     addQuestionsDom();
// }



// if (i === 0) {
//     return questions[currentIndex];
// } else if (i < 0) {
//     return theArray[(currentIndex + theArray.length + i) % theArray.length];
// } else if (i > 0) {
//     return theArray[(currentIndex + i) % theArray.length];
// }
//     // someFunction()






