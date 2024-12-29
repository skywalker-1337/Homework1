// Задание 1
let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) break;
} // Сделал так для того, чтобы 10 тоже выводилось, если выводить не нужно, то надо просто консоль лог и иф местами поменять

// Задание 2
let a = [1, 5, 4, 10, 0, 3];

let index = a.indexOf(4);

console.log(index);

// Задание 3
let b = [1, 3, 5, 10, 20];

let bJoin = b.join(' ');

console.log(bJoin);

//Задание 4
let c = [];

for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    c.push(row);
}

console.log(c);

//Задание 5
let d = [1, 1, 1];

d.push(2, 2, 2);

console.log(d);

//Задание 6
let arr = [9, 8, 7, 'a', 6, 5];

arr.sort((a, b) => a - b);

arr = arr.filter(item => item !== 'a');

console.log(arr);

// Задание 7
let arr = [9, 8, 7, 6, 5];

let question = +prompt('Попробуй угадать число');

if (isNaN(question)) {
    console.log('Не угадал, попробуй еще раз');
} else if (arr.includes(question)) {
    console.log('Угадал');
} else {
    console.log('Не угадал, попробуй еще раз');
}

//Задание 8
let a = 'abcdef';

let reversed = a.split('').reverse().join('');

console.log(reversed);

//Задание 9
let arr = [
    [1, 2, 3],
    [4, 5, 6]
];

let flatArr = arr.flat();

console.log(splitArr);

//Задание 10
let arr = [3, 7, 2, 9, 5, 6, 8, 1, 10, 4];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}

//Задание 11
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

let numbers = [1, 2, 3, 4, 5];

let squares = squareNumbers(numbers);

console.log(squares);

//Задание 12
function getWordLengths(arr) {
    return arr.map(word => word.length);
}

let words = ['Ichigo', 'Ichibey', 'Kyoraku', 'Aizen'];
let wordLengths = getWordLengths(words);

console.log(wordLengths); 

//Задание 13
function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

let numbers = [2, -7, 6, -1, 10, -9, 8];
let negativeNumbers = getNegativeNumbers(numbers);

console.log(negativeNumbers); 

//Задание 14
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 11));
}

let evenNumbers = arr.filter(num => num % 2 === 0);

console.log("Исходный массив:", arr);
console.log("Массив с четными числами:", evenNumbers);

//Задание 15
let arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
}

let sum = arr.reduce((acc, num) => acc + num, 0);
let average = sum / arr.length;

console.log("Массив:", arr);
console.log("Среднее арифметическое:", average);

