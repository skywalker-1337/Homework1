// Задание 1
const min = (a, b) => {
    if (a === b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return a;
    }
}

// Задание 2
const parity = (a) => {
    if (a % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

// Задание 3
// Первая функция
const squareOfNumberOne = (a) => {
    console.log(a * a);
}
// Вторая функция
const squareOfNumberTwo = (b) => {
    return b * b;
}

// Задание 4
const age = (a) => {
    let userAge = +prompt("Сколько тебе лет");

    if (userAge < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAge < 13) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

// Задание 5
const multiplyNumbers = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

// Задание 6
const squareNumbers = (a) => {
    if (isNaN(a)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${a} в кубе равняется ${a * a * a}`;
    }
}

// Задание 7
const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};