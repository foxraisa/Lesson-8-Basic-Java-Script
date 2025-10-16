// Урок "Работа с датами"
// 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели по введённой дате.
function getDayOfWeek(dateString) {
    // Проверяем формат с помощью регулярного выражения
    let dateRegex = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
    let match = dateString.match(dateRegex);
    
    if (!match) {
        return "Ошибка: неверный формат даты!";
    }
    
    let day = parseInt(match[1]);
    let month = parseInt(match[2]);
    let year = parseInt(match[3]);
    
    // Проверяем корректность даты
    let date = new Date(year, month - 1, day);
    
    if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
        return "Ошибка: некорректная дата!";
    }
    
    // Дни недели
    let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[date.getDay()];
}

// Использование функции
let input = prompt("Введите дату в формате ДД.ММ.ГГГГ:");
if (input !== null) {
    let result = getDayOfWeek(input);
    console.log("Дата: " + input);
    console.log("День недели: " + result);
}

// 2.Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.
// Получаем текущее время
let currentTime = new Date();

// Получаем часы, минуты и секунды
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

// Вычисляем общее количество минут с начала дня
let totalMinutes = hours * 60 + minutes;

// Выводим результат
console.log("Текущее время: " + 
    String(hours).padStart(2, '0') + ":" + 
    String(minutes).padStart(2, '0') + ":" + 
    String(seconds).padStart(2, '0'));
console.log("Часов прошло: " + hours);
console.log("Минут прошло: " + totalMinutes);
console.log("Секунд прошло: " + (totalMinutes * 60 + seconds));

// 3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ. Написать программу, которая определяет более молодого пользователя.
// Даты рождения двух пользователей
let user1Birthday = "15.05.1990";
let user2Birthday = "20.08.1985";

// Функция для преобразования даты из строки в объект Date
function parseDate(dateString) {
    let parts = dateString.split('.');
    let day = parseInt(parts[0]);
    let month = parseInt(parts[1]);
    let year = parseInt(parts[2]);
    return new Date(year, month - 1, day); // месяцы с 0
}

// Преобразуем даты рождения
let date1 = parseDate(user1Birthday);
let date2 = parseDate(user2Birthday);

console.log("Дата рождения пользователя 1: " + user1Birthday);
console.log("Дата рождения пользователя 2: " + user2Birthday);

// Сравниваем даты
if (date1 > date2) {
    console.log("✅ Пользователь 1 моложе пользователя 2");
} else if (date1 < date2) {
    console.log("✅ Пользователь 2 моложе пользователя 1");
} else {
    console.log("✅ Пользователи одного возраста");
}


