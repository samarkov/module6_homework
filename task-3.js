// Задание 3.

// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.


function outerFunc(x) {
    return function(y) {
        return x + y;
    }
}

const innerFunc = outerFunc(10);

const result = innerFunc(20);

console.log('sum: ' + result);