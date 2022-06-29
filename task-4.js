// Задание 4.

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
// начиная от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
const sNum = 5;
const eNum = 15;

let iterator = 0;

function printNumber(startNumber, endNumber) {
    ms = new Date();
    console.log(startNumber + iterator++);
}

const idTimer = setInterval(printNumber, 1000, sNum, eNum);

setTimeout(function (id) {
            clearInterval(id);
            },
    ((eNum - sNum) + 1) * 1000 + 100, idTimer);
