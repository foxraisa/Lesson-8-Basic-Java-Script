// Урок "Тип данных"
//1.В переменных a и b хранятся числа. Написатьпрограмму, которая выводит в консоль произведение и сумму этих чисел.
let a = 5;
let b = 3;
let multiplication = a * b;
let sum = a + b;
console.log("Задача 1:");
console.log("Число a = " + a);
console.log("Число b = " + b);
console.log("Произведение чисел: " + multiplication);
console.log("Сумма чисел: " + sum);

//2.В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
let str1 = "Hello";
let str2 = "World";

let length1 = str1.length;
let length2 = str2.length;

let totalLength = length1 + length2;

console.log("Задача 2:");
console.log("Строка 1: '" + str1 + "' (длина: " + length1 + ")");
console.log("Строка 2: '" + str2 + "' (длина: " + length2 + ")");
console.log("Суммарная длина строк: " + totalLength);

// 3.*Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.

let userInput = prompt("Введите трехзначное число: ");
if(userInput != null) {
    let number = parseInt(userInput);

    if(!isNaN(number) && userInput.length === 3) {
        let digit1 = parseInt(userInput[0]);
        let digit2 = parseInt(userInput[1]);
        let digit3 = parseInt(userInput[2]);

        let sumOfDigits = digit1 + digit2 + digit3;

        console.log("Задча 3:");
        console.log("Введенное число: " + number);
        console.log("Цифры числа: " + digit1 + digit2 + digit3);
        console.log("Сумма цифр: " + sumOfDigits);

    } else {
        console.log("Ошибка: пожалуйста введите именно трехзначное число!")
    }
} else {
    console.log("Ввод отменен пользователем");
}











