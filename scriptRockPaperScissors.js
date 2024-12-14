const choices = ["камень", "ножницы", "бумага"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Ничья";
    }
    if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        return "Вы победили!";
    }
    return "Вы проиграли!";
}

function startGameRockPaperScissors() {
    let attempts = 3;
    let wins = 0;
    let losses = 0;
    let draws = 0;

    while (attempts > 0) {

        const userChoice = prompt("Выберите: камень, ножницы или бумага. Для выхода напишите 'выход'.").toLowerCase();

        if (userChoice === "выход") {
            alert("Вы вышли из игры. Спасибо за участие!");
            break;
        }

        if (!choices.includes(userChoice)) {
            alert("Неверный выбор. Пожалуйста, выберите камень, ножницы или бумага.");
            continue;
        }

        const computerChoice = getComputerChoice();

        const result = determineWinner(userChoice, computerChoice);

        if (result === "Вы победили!") {
            wins++;
        } else if (result === "Вы проиграли!") {
            losses++;
        } else if (result === "Ничья") {
            draws++;
        }

        alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);

        attempts--;
        if (attempts > 0) {
            alert(`Осталось попыток: ${attempts}`);
        }
    }

    alert(`Игра окончена!\nКоличество побед: ${wins}\nКоличество поражений: ${losses}\nКоличество ничьих: ${draws}`);
}