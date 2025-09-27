// Урок "Условия"
// 1.В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.
let a = 15;
let b = 8;

console.log("Число a = " + a);
console.log("Число b = " + b);

if (a > b) {
    console.log("Наибольшее число: " + a);
} else if (b > a) {
    console.log("Наибольшее число: " + b);
} else {
    console.log("Числа " + a + " " + b + " равны");
}


// 2.Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее этому числу (1 — январь, 2 — февраль и т.д.).
let monthNumber = prompt("Введите число от 1 до 12:");

// Проверяем, что пользователь ввел данные (не нажал "Отмена")
if (monthNumber !== null) {
    // Преобразуем введенную строку в число
    let number = parseInt(monthNumber);
    
    // Проверяем, что введено число от 1 до 12
    if (!isNaN(number) && number >= 1 && number <= 12) {
        
        // Способ 1: Используем конструкцию if-else if
        let monthName;
        
        if (number === 1) {
            monthName = "январь";
        } else if (number === 2) {
            monthName = "февраль";
        } else if (number === 3) {
            monthName = "март";
        } else if (number === 4) {
            monthName = "апрель";
        } else if (number === 5) {
            monthName = "май";
        } else if (number === 6) {
            monthName = "июнь";
        } else if (number === 7) {
            monthName = "июль";
        } else if (number === 8) {
            monthName = "август";
        } else if (number === 9) {
            monthName = "сентябрь";
        } else if (number === 10) {
            monthName = "октябрь";
        } else if (number === 11) {
            monthName = "ноябрь";
        } else if (number === 12) {
            monthName = "декабрь";
        }
        
        console.log("Число " + number + " соответствует месяцу: " + monthName);
        
    } else {
        // Если введено не число от 1 до 12
        console.log("Ошибка: пожалуйста, введите число от 1 до 12!");
    }
} else {
    // Если пользователь нажал "Отмена"
    console.log("Ввод отменен пользователем.");
}


// 3.В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.

let circleArea = 25;
let squareArea = 36;

console.log("Площадь круга: " + circleArea);
console.log("Площадь квадрата: " + squareArea);

let circleRadius = Math.sqrt(circleArea / Math.PI);
let circleDiameter = 2 * circleRadius;

let squareSide = Math.sqrt(squareArea);

console.log("Диаметр круга: " + circleDiameter.toFixed(2));
console.log("Сторона квадрата: " + squareSide.toFixed(2));

if (circleDiameter <= squareSide) {
    console.log("✅ Круг ПОМЕСТИТСЯ в квадрат");
} else {
    console.log("❌ Круг НЕ поместится в квадрат");
}