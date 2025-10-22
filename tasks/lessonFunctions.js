// Урок "Функции"
// 1.Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим.
 function diff2(a, b) {
    return Math.abs(a - b);
}

// Проверяем вторую версию
console.log("diff2(10, 5) = " + diff2(10, 5));
console.log("diff2(3, 8) = " + diff2(3, 8));


// 2.Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.
function isWord(text) {
    // Убираем пробелы в начале и конце строки
    let trimmedText = text.trim();
    
    // Проверяем, есть ли пробелы внутри строки
    // Если пробелов нет - это одно слово, возвращаем true
    // Если пробелы есть - это несколько слов, возвращаем false
    return !trimmedText.includes(' ');
}

// Тестируем функцию
console.log("isWord('Hello') = " + isWord('Hello'));           // true
console.log("isWord('Hello world') = " + isWord('Hello world')); // false



// *Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.

function pow(a, x) {
    let result = 1;
    
    // Умножаем a само на себя x раз
    for (let i = 0; i < x; i++) {
        result = result * a;
    }
    
    return result;
}

// Тестируем функцию
console.log("pow(2, 3) = " + pow(2, 3));     // 2³ = 8
console.log("pow(5, 2) = " + pow(5, 2));     // 5² = 25