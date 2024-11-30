        function generateTask() {
            let num2 = Math.floor(Math.random() * 10) + 1;
            let num1 = num2 * (Math.floor(Math.random() * 10) + 1);

            let operations = ['+', '-', '*', '/'];
            let operation = operations[Math.floor(Math.random() * operations.length)];

            let question;
            let correctAnswer;

            if (operation === '+') {
                question = `${num1} + ${num2}`;
                correctAnswer = num1 + num2;
            } else if (operation === '-') {
                question = `${num1} - ${num2}`;
                correctAnswer = num1 - num2;
            } else if (operation === '*') {
                question = `${num1} * ${num2}`;
                correctAnswer = num1 * num2;
            } else if (operation === '/') {
                question = `${num1} / ${num2}`;
                correctAnswer = num1 / num2;
            }

            return { question, correctAnswer };
        }

        function startGame() {
            let { question, correctAnswer } = generateTask();

            let userAnswer = prompt(`Решите задачу: ${question}`);

            if (userAnswer === null) {
                alert('Вы вышли из игры');
                return;
            }

            userAnswer = parseFloat(userAnswer);

            if (isNaN(userAnswer)) {
                alert('Пожалуйста, введите числовой ответ!');
            } else if (Math.abs(userAnswer - correctAnswer) < 0.0001) {
                alert("Правильный ответ!");
            } else {
                alert(`Неправильный ответ. Правильный ответ: ${correctAnswer}`);
            }
        }