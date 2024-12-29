function reverseText() {
  let userInput;

  while (true) {
    userInput = prompt("Введите текст, и я его переверну!");

    if (userInput === null) {
      alert("Вы вышли из игры.");
      break;
    }

    if (userInput.trim() === "") {
      alert("Пожалуйста, введите текст.");
      continue;
    }

    let reversedText = userInput.split('').reverse().join('');
    alert("Перевернутый текст: " + reversedText);
    break;
  }
}
