
// Урок "Работа с DOM"
// Сверстать страницу и подключить к ней файл со скриптом. На странице должны быть три текстовых параграфа, поле ввода и кнопка. Напишите скрипт, который будет выполнять следующие условия:
// 1.Кнопка скрыта, если в поле ввода нет значения.
// 2.При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода.
// 3.*Если параграфов становится больше 5, первый из них удаляется.

// workingDOM.js - Скрипт для работы с DOM элементами

// Получаем элементы DOM
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const paragraphsContainer = document.getElementById('paragraphsContainer');
const counterElement = document.getElementById('counter');

// Функция для обновления состояния кнопки
function updateButtonState() {
    // Кнопка скрыта (disabled), если поле ввода пустое
    addButton.disabled = textInput.value.trim() === '';
}

// Функция для добавления нового параграфа
function addNewParagraph() {
    const text = textInput.value.trim();
    
    // Если текст пустой, ничего не делаем
    if (text === '') {
        return;
    }
    
    // Создаем новый элемент параграфа
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    newParagraph.classList.add('new-paragraph');
    
    // Добавляем новый параграф в контейнер
    paragraphsContainer.appendChild(newParagraph);
    
    // Проверяем количество параграфов
    const paragraphs = paragraphsContainer.getElementsByTagName('p');
    
    // Если параграфов больше 5, удаляем первый
    if (paragraphs.length > 5) {
        // Добавляем анимацию удаления
        paragraphs[0].style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => {
            paragraphsContainer.removeChild(paragraphs[0]);
            updateCounter();
        }, 300);
    }
    
    // Очищаем поле ввода
    textInput.value = '';
    
    // Обновляем состояние кнопки
    updateButtonState();
    
    // Обновляем счетчик
    updateCounter();
    
    // Прокручиваем к новому параграфу
    setTimeout(() => {
        newParagraph.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }, 100);
    
    // Убираем класс анимации через 1.5 секунды
    setTimeout(() => {
        newParagraph.classList.remove('new-paragraph');
    }, 1500);
}

// Функция для обновления счетчика параграфов
function updateCounter() {
    const count = paragraphsContainer.getElementsByTagName('p').length;
    counterElement.textContent = count;
    
    // Меняем цвет счетчика при приближении к лимиту
    if (count >= 4) {
        counterElement.style.color = '#e74c3c';
    } else {
        counterElement.style.color = '#2c3e50';
    }
}

// Обработчик события для поля ввода
textInput.addEventListener('input', updateButtonState);

// Обработчик события для кнопки
addButton.addEventListener('click', addNewParagraph);

// Обработчик события для клавиши Enter в поле ввода
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !addButton.disabled) {
        addNewParagraph();
    }
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем счетчик
    updateCounter();
    
    // Обновляем состояние кнопки
    updateButtonState();
    
    // Фокусируемся на поле ввода для удобства пользователя
    textInput.focus();
    
    console.log('workingDOM.js загружен и готов к работе!');
});

// Экспорт функций для возможного использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateButtonState,
        addNewParagraph,
        updateCounter
    };
}
