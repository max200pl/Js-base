var randomNumber = Math.floor(Math.random() * 100) + 1;
// переменная guesses содержит ссылку на элемент <p>
var guesses = document.querySelector('.guesses');

var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit'); // кнопка

// для получения значение guessField исп. метод querySelector
// guessField хронит ссылку на элемент <input>
// guessField имеет достпу к ряду свойств:
// (переменным, методам(фенкциям));

var guessField = document.querySelector('.guessField'); // поле ввода
var guessCount = 1;
var resetButton;
//метод focus для навеления курсора при загрузке страницы
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value); //встроенный метод Number(только числа)
    // блок условного кода
    if (guessCount === 1) { // если True то выполняем в {___}
        guesses.textContent = 'Предыдущие догадки: ';
    }
    // блок условного кода
    guesses.textContent += userGuess + ' '; // добвляет значение в строке + пустое место
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Поздровляем! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 2) {
        lastResult.textContent = '!!!Конец игры!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Ну не то!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Ну маловато!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Ну слишком много!';
        }
    }
    guessCount++; // инкрементирем +1 ход
    guessField.value = ''; // обновляем код
    guessField.focus(); // фокусируемся на строке
}
guessSubmit.addEventListener('click', checkGuess);
// метод guessSubmit прослушиватель событий
// два входных значения (называемые аргументами)
// тип события --> 'click'
function setGameOver() {
    guessField.disabled = true; // отключем поле
    guessSubmit.disabled = true; // отключем кнопку

    //генерируем новый элемент 'button'
    resetButton = document.createElement('button');

    // устанавливем название (метки) конопки 'Start new game'
    resetButton.textContent = 'Начать заново';

    // доболение к нижней части страницы
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1; // устанавливаем напервый ход
    // удаляем все пункты информации
    // переменная с содержанием всех обзацев в нутри <div class = "resultParas">

    var resetParas = document.querySelectorAll('.resultParas p');

    // проходит по каждому из них
    for (var i = 0; i < resetParas.length; i++) {
        //удаляет текст
        resetParas[i].textContent = '';
    }

    //удаляем кнопку resetButton
    resetButton.parentNode.removeChild(resetButton);

    // влючаем элементы ввода
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';

    // фокусируем
    guessField.focus();

    // удаляем цвет фона
    lastResult.style.background = 'White';

    // создаем новое рандомное число
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
