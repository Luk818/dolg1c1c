// utils.js

export function validateEquation(equation) {
    // Проверка на наличие оператора
    const operatorRegex = /[+-*/]/;
    const hasOperator = operatorRegex.test(equation);
    
    if (!hasOperator) {
        return 'в выражении должны использоваться только операторы +, -, /, *';
    }

    // Проверка на операнды
    const operands = equation.split(operatorRegex);
    for (const operand of operands) {
        if (operand.trim() === '') {
            return 'не хватает одного или нескольких операндов';
        }
        if (!/^d$/.test(operand)) {
            return 'операнды могут быть только числами';
        }
    }

    return ''; // Если все проверки пройдены
}

export function calcEquation(equation) {
    if (validateEquation(equation) !== '') {
        return ''; // Возвращаем пустую строку, если выражение недопустимо
    }

    // Выполнение вычислений
    const result = eval(equation); // Используем eval для выполнения математического выражения
    return result.toString(); // Возвращаем результат как строку
}

