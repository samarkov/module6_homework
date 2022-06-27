// Задание 2.

// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет. Если введено 
// больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function checkSimpleNumber(x) {
    let divCounter = 0;
    if (x > 1000 ) {
        console.log('Число ' + x +' больше 1000, опеределение простого числа не выполнено.');
        return -1;
    }
    for (let i=1; i<=Math.sqrt(x); i++){
        if ((x%i === 0) ) {
            if ((++divCounter >= 2)) {
                console.log('Число ' + x +' не является простым');
                return 0;
            }
        }
    }
    if (divCounter == 1 && x !== 1) {
        console.log('Число ' + x +' - простое');
        return 1;
    } 
    if (divCounter < 2 || x === 0 ) {
        console.log('Число ' + x +' не соответсвует условиям простого числа');
        return -1;
    }0

    
}

// проверяем диапазон 0..20
for (let i=0; i <= 20; i++) {
    checkSimpleNumber(i);
}

// проверяем диапазон 990..1001

for (let i=990; i <= 1001; i++) {
   checkSimpleNumber(i);
}





// Задание 1.

// Дан массив.Нужно вывести в консоль количество чётных и нечётных элементов в массиве.Если в массиве есть нулевой элемент, 
// то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


let result = false;
let randArray1 = [1, 2, 3, -3, 'arrrr', 'book'];
let randArray2 = [1, 0, 1, 0, 1, 2, 14, 1, 1, 4, 1, 1, 8];


function countOddandEven(arr) {
    let countOddNumbers = 0;
    let countEvenNumbers = 0;
    let countZeroNumbers = 0;
    for (i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {   //отбрасываем все не числа

            arr[i] % 2 !== 0 ? ++countOddNumbers : ++countEvenNumbers;

            if (arr[i] === 0) { ++countZeroNumbers };
        }
    }
    console.log('четных:' + countEvenNumbers + ' нечетных:' + countOddNumbers + ' нулей: ' + countZeroNumbers);
    return true;
}

result = countOddandEven(randArray1);
result = countOddandEven(randArray2);