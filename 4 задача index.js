// index.js

import { validateEquation, calcEquation } from './utils.js';

document.querySelector('.input-validation').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const equationInput = document.getElementById('equation');
    const errorOutput = document.querySelector('.error-output');
    const resultOutput = document.querySelector('.result');

    const equation = equationInput.value;
    
    // Валидация уравнения
    const validationError = validateEquation(equation);
    
    if (validationError) {
        errorOutput.textContent = validationError;
        equationInput.classList.add('error'); // Добавляем класс ошибки к инпуту
        resultOutput.textContent = ''; // Очищаем результат
    } else {
        errorOutput.textContent = ''; // Очищаем сообщение об ошибке
        equationInput.classList.remove('error'); // Убираем класс ошибки
        const result = calcEquation(equation);
        resultOutput.textContent = result; // Выводим результат
    }
});
