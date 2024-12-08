const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function runQuiz() {
    let correctCount = 0; 

    let userAnswer;
    for (let i = 0; i < quiz.length; i++) {
        let question = quiz[i].question;
        let options = quiz[i].options.join("\n");

        userAnswer = prompt(`${question}\n${options}\nНажмите "Отмена" для выхода`);

        if (userAnswer === null) {
            alert('Выход из игры.');
            break;
        }

        let parsedAnswer = parseInt(userAnswer);

        if (!isNaN(parsedAnswer) && parsedAnswer === quiz[i].correctAnswer) {
            correctCount++;
        }
    }

    if (userAnswer !== null) {
        alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов!`);
    }
}