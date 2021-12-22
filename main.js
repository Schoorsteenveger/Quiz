const body = document.querySelector('body');
body.classList.add('body');

const container = document.querySelector('div');
container.classList.add('.container');
body.append(container);

const startIntroText = document.createElement('startIntro');//nog stylen.
startIntroText.innerText = 'Welkom bij deze Quiz'
container.append(startIntroText);

// const startQuizBtn = document.querySelector('start-quiz-btn');
// container.append(startQuizBtn);

// Start Quiz
function startQuiz() {
    const startQuizBtn = document.querySelector('start-quiz-btn');
    container.append(startQuizBtn);
    //remove when quiz starts
}

// kleiner schrijven?
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

const divAnswers = document.createElement('div');

// 5 rijen aanmaken met nummers per vraag en de antwoorden.
function giveMeFiveRows(divAnswers, numberBol) {
    for (let i = 0; i < 5; i++) {
        const divAnswers = document.createElement('div');
        divAnswers.classList.add('answers');
        containerAll.append(divAnswers);

        // const numberBol = document.createElement('p');
        // numberBol.classList.add('p');
        // numberBol.innerText= "ja doei, ik ga koken!"
        // divAnswers.append(numberBol);

    }

}
giveMeFiveRows(divAnswers)
// buttons next & Prev.

const btnPrevious = document.createElement('button');
btnPrevious.classList.add('btn-prev');
btnPrevious.innerText = 'Vorige';
containerAll.appendChild(btnPrevious);
// btnPrevious.addEventListener('click', emptyDivs());


const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
btnNext.innerText = 'Volgende';
containerAll.appendChild(btnNext);
// btnNext.addEventListener('click',emptyDivs());

//Leeg answer divs met data
// Function click btns previous and next
function loopButtons() {
    let btnPrevious = document.createElement('button');
    btnPrevious.classList.add('btn-prev');
    btnPrevious.innerText = 'Vorige';
    containerAll.appendChild(btnPrevious);
    btnPrevious.onclick = function () {
        if (questions[i] === 1) {
            return
        }
        questions--
        divAnswers.innerHTML = "";
        startQuizBtn()
    }
    let btnNext = document.createElement('button');
    btnNext.classList.add('btn-next');
    btnNext.innerText = 'Volgende';
    containerAll.appendChild(btnNext);
    btnNext.onclick = function () {
        questions++
        if (questions > 5) {
            questions = 1
        }
        emptyAnswerDivs.innerHTML = "";
        startQuiz()
    }
    container.append(questions);
}
loopButtons()


const emptyAnswerDivs = document.querySelector('.print-question', '.answers');
function emptyDivs() {
    emptyAnswerDivs.innerHTML = "";
}

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

// Index vragen in de dom zetten
function addQuestionsDom() {
    const questionDiv = document.querySelector('.print-question');
    const answersDivs = document.querySelectorAll('.answers'); // node-list loop nodig
    questionDiv.innerText = questions[0].question
    for (let i = 0; i < answersDivs.length; i++) {
        answersDivs[i].innerText = questions[0].options[i];

    }

}
addQuestionsDom();


// function emptyAnswerDivs("click", ) {
// if answersDivs[i]clickNext.appendChild[""];
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


