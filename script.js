const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Rome"
        },
        correctAnswer: "c"
    },
    {
        question: "Which language is primarily used for web development?",
        answers: {
            a: "Python",
            b: "JavaScript",
            c: "C++",
            d: "Java"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the smallest prime number?",
        answers: {
            a: "0",
            b: "1",
            c: "2",
            d: "3"
        },
        correctAnswer: "c"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const quizContainer = document.getElementById('quiz');
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

buildQuiz();

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', showResults);
