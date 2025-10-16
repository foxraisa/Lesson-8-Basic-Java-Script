// Урок "Объекты"
// 1. Создайте объект user, содержащий поле name со значением ‘John’.

let user1 = {
    name: 'John'
};

console.log(user1);
console.log("Имя пользователя: " + user1.name);

// 2. Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.

let user = {
    name: 'John'
};

let ageInput = prompt("Введите возраст:");

if (ageInput !== null) {
    let age = parseInt(ageInput);
    
    if (!isNaN(age) && age > 0) {
        user.age = age;
        
        console.log("Обновленный объект user:");
        console.log(user);
        console.log("Имя: " + user.name);
        console.log("Возраст: " + user.age);
    } else {
        console.log("Ошибка: пожалуйста, введите корректный возраст!");
    }
} else {
    console.log("Ввод отменен пользователем.");
}

// 3. Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.

let user2 = {
    name: 'John'
};

let admin = { ...user2 };

admin.role = 'admin';

console.log("Исходный объект user:");
console.log(user2);

console.log("Новый объект admin:");
console.log(admin);

console.log("Это разные объекты: " + (user2 !== admin));


// 4. Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей
// Создаем объект user
let person = {
    namePerson: 'John'
};

// Создаем копию объекта user с именем admin
let adminPerson = { ...personPerson };

// Добавляем новому объекту поле role со значением 'admin'
adminPerson.rolePerson = 'admin';

// Записываем значения полей объекта admin в отдельные переменные
let namePerson = adminPerson.namePerson;
let rolePerson = adminPerson.rolePerson;

// Выводим объект admin и переменные
console.log("Объект admin:");
console.log(adminPerson);

console.log("Переменные:");
console.log("namePerson = " + namePerson);
console.log("rolePerson = " + rolePerson);

// Проверяем, что переменные содержат правильные значения
console.log("Проверка:");
console.log("adminPerson.namePerson === namePerson: " + (adminPerson.namePerson === namePerson));
console.log("adminPerson.rolePerson === rolePerson: " + (adminPerson.rolePerson === rolePerson));