/* ЗАДАНИЕ 1
parseAmount('10'); // -> 1000
parseAmount('10,5'); // -> 1050
parseAmount('10,55'); // -> 1055 */

function parseAmount() {
    let value = parseFloat(prompt('Задача №1: введите число').replace(',', '.'));
    alert (value * 100);
}

parseAmount();
