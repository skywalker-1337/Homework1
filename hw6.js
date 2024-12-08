//Задание 1
let string = 'js';
let upperCaseString = string.toUpperCase();
console.log(upperCaseString);

//Задание 2
function filterStringsByPrefix(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

//Задание 3
let number = 32.58884;

let floorValue = Math.floor(number);
console.log(floorValue);

let ceilValue = Math.ceil(number);
console.log(ceilValue);

let roundValue = Math.round(number);
console.log(roundValue);

//Задание 4
let numbers = [52, 53, 49, 77, 21, 32];

let minValue = Math.min(...numbers);
console.log("Минимальное значение:", minValue);

let maxValue = Math.max(...numbers);
console.log("Максимальное значение:", maxValue);

//Задание 5
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

//Задание 6
function generateRandomArray(n) {
    let length = Math.floor(n / 2);
    let randomArray = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * n);
        randomArray.push(randomNumber);
    }

    return randomArray;
}

//Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Задание 8
let currentDate = new Date();
console.log(currentDate.toLocaleDateString());

//Задание 9
let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate.toLocaleDateString());

//Задание 10
function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const weekdays = [
        "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `Дата: ${day} ${month} ${year} — это ${weekday}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    console.log(formattedDate);
    console.log(formattedTime);
}