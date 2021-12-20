const btnStartQuiz = document.querySelector('.start-quiz-button');


btnStartQuiz.addEventListener('click', ;
console.log(btnStartQuiz);

function addNew(){
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    console.log("hai")
    // this.question = question;
    // body.appendChild(newQuestion);

    
}


function directButtons() {
    const btnPrevious = document.createElement('button');
    btnPrevious.classList.add('btn-prev');
    btnPrevious.innerText = 'Vorige';
    containerAll.appendChild(btnPrevious);
    btnPrevious.onclick = () => { clickPrev() };

    const btnNext = document.createElement('button');
    btnNext.classList.add('btn-next');
    btnNext.innerText = 'Volgende';
    containerAll.appendChild(btnNext);
    btnNext.onclick = () => { clickNext() };
}

function clickNext() {
    pageCounter++
    if (pageCounter > questionArray.length - 1) {
        pageCounter = questionArray.length - 1
    }
    constructTitle()
    constructAnswerblocks()
    constructQuestion()
    console.log(pageCounter)
}

function clickPrev() {
    countQuestions--
    if (countQuestions < 0) {
        countQuestions = 0
    }
    constructTitle()
    constructAnswerblocks()
    constructQuestion()

    console.log(countQuestions)
}
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

