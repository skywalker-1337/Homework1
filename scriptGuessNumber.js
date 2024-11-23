const guessTheNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;

    while (userGuess !== randomNumber) {
        userGuess = +prompt("Угадайте число от 0 до 100");

        if (isNaN(userGuess)) {
            alert('Введенное значение не является числом, попробуйте еще раз!');
        } else if (userGuess < randomNumber) {
            alert("Загаданное число больше.");
        } else if (userGuess > randomNumber){
            alert('Загаданное число меньше');
        } else {
            alert('Поздравляю! Вы угадали число!');
        }
    }
}