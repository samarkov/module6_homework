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