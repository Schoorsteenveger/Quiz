const container = document.querySelector(".container");
container.classList.add('container');
const containerAll = document.createElement('div');
containerAll.classList.add('container-all');
const containerQuiz = document.createElement('div');
containerQuiz.classList.add('container-quiz');
container.append(containerAll);
containerAll.classList.add('hide');

let currentQuestionIndex;
let divQuestion;
let divAnswers;
let pageCounter;


// Startbutton & intro text

const startQuizBtn = document.createElement('button');
startQuizBtn.classList.add('start-quiz-btn');
// btnStartQuiz.classList.add('hide');
startQuizBtn.innerText = "Start";
container.append(startQuizBtn);

const startIntroText = document.createElement('startIntro');//nog stylen.
startIntroText.innerText = 'Welkom bij deze Quiz'
// startIntroText.classList = ('hide');
container.append(startIntroText);

// Start Quiz

startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startQuizBtn.classList.add('hide');
    startIntroText.classList.add('hide');
    containerAll.classList.remove('hide');
    containerQuiz.classList.remove("hide");
    currentQuestionIndex = 0;
    addQuizContent();
    // console.log('started')
}

// Add Title, Counter 

function addHeaderGame() {
    const titleGame = document.createElement('h2');
    titleGame.innerText = 'Math Problem';
    const pageCounter = document.createElement('p');
    // containerQuiz.innerText = `${pageCounter}/6`;
    pageCounter.innerText = `${currentQuestionIndex} / 6`;
    containerQuiz.append(titleGame, pageCounter);
    containerAll.append(containerQuiz);
}
addHeaderGame();
// console.log(addHeaderGame);

// Questions & Answers 

const quizContent = [
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
];

// Add quiz content to Dom

function addQuizContent() {
    //add questions
    divQuestion = document.createElement('div');
    divQuestion.classList.add('print-question');
    divQuestion.querySelector('.answers');
    containerQuiz.append(divQuestion);
    divQuestion.innerText = quizContent[currentQuestionIndex].question;

    //loop add the answers + div
    for (let options of quizContent[currentQuestionIndex].options) {
        const divAnswers = document.createElement('div'); //moet dit al in de html te kiezen zijn.
        divAnswers.classList.add('answers');
        divAnswers.querySelector('.answers');
        containerQuiz.append(divAnswers);
        divAnswers.innerText = options;
    }
    
    // giveMeFiveRows();
}

// Add button previous & next
const containerButtons = document.createElement('div');
containerAll.append(containerButtons);
const btnPrevious = document.createElement('button');
btnPrevious.classList.add('btn-prev');
btnPrevious.innerText = 'Vorige';
containerButtons.appendChild(btnPrevious);
btnPrevious.addEventListener('click', getPreviousQuestions);

const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
btnNext.innerText = 'Volgende';
containerButtons.appendChild(btnNext);
btnNext.addEventListener('click',getNextQuestions);
// btnNext.addEventListener('click',emptyDivs());

// Get next & previous questions

function getNextQuestions() {
    currentQuestionIndex++ // +1 volgende vraag
    divQuestion.innerText = quizContent[currentQuestionIndex].question;
    divAnswers = document.querySelectorAll(".answers");

    // pageCounter.innerText = `${currentQuestionIndex + 1}/ 6`;

    for (let i = 0; i < quizContent.length; i++);
        divAnswers.forEach(function (options, index) {
        divAnswers[index].innerText = quizContent[currentQuestionIndex].options[index];
            console.log(quizContent[currentQuestionIndex].options[index])
            
        });
    // Is de vraag al beantwoord, toon result goed en fout.
    // toon current vraagnummer in pagecounter
    // aan het einde van vraag 5 score tonen op resultpagina.
    // if (currentQuestionIndex >= quizContent.length);
    console.log(currentQuestionIndex)
    // restartQuiz();

}


function getPreviousQuestions() {
    currentQuestionIndex--;
    divQuestion.innerText = quizContent[currentQuestionIndex].question;
    // divAnswers = document.querySelectorAll(".answers").click();
    console.log(divAnswers)
    // pageCounter.innerText = `${currentQuestionIndex + 1}/ 6`;
    
    for (let i = 0; i < divAnswers.length; i++) {
        divAnswers.forEach(function (options, index) {
            divAnswers[index].innerText = quizContent[currentQuestionIndex].options[index];
        });
    }
} 

// Select question on clicking option divs

let selectAnswers = document.querySelectorAll('.answers');
selectAnswers.addEventListener("click",(event) => {
    console.log("Clicked");
})


//  5 rijen aanmaken met nummers per vraag en de antwoorden.
// function giveMeFiveRows() {
//     for (let i = 0; i < 5; i++) {
//         const divAnswers = document.createElement('div');
//         divAnswers.classList.add('answers');
//         containerQuiz.append(divAnswers);

//     }
// }
// // giveMeFiveRows(divAnswers);

