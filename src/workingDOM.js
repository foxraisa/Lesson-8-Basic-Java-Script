// workingDOM.js - основной файл с логикой приложения
// Для новичка: этот файл содержит всю "интеллектуальную" часть приложения

// Получаем элементы DOM
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const paragraphsContainer = document.getElementById('paragraphsContainer');
const counterElement = document.getElementById('counter');

// Константы для лучшей читаемости кода
const MAX_PARAGRAPHS = 5;
const ANIMATION_DURATION = 300;
const SCROLL_DELAY = 100;
const REMOVE_ANIMATION_DELAY = 1500;

/**
 * Функция для обновления состояния кнопки
 * Кнопка скрыта (disabled), если поле ввода пустое
 */
function updateButtonState() {
  addButton.disabled = textInput.value.trim() === '';
}

/**
 * Функция для создания нового элемента параграфа
 * @param {string} text - Текст для параграфа
 * @returns {HTMLElement} Созданный элемент параграфа
 */
function createParagraphElement(text) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  newParagraph.classList.add('new-paragraph');
  return newParagraph;
}

/**
 * Функция для удаления первого параграфа, если их больше максимума
 */
function removeFirstParagraphIfNeeded() {
  const paragraphs = paragraphsContainer.getElementsByTagName('p');
  
  if (paragraphs.length > MAX_PARAGRAPHS) {
    // Добавляем анимацию удаления
    paragraphs[0].style.animation = 'slideInLeft 0.3s ease reverse';
    
    setTimeout(() => {
      if (paragraphs[0] && paragraphs[0].parentNode) {
        paragraphsContainer.removeChild(paragraphs[0]);
        updateCounter();
      }
    }, ANIMATION_DURATION);
  }
}

/**
 * Функция для добавления нового параграфа
 */
function addNewParagraph() {
  const text = textInput.value.trim();
 
  // Защита от пустого ввода
  if (text === '') {
    return;
  }
 
  // Создаем и добавляем новый параграф
  const newParagraph = createParagraphElement(text);
  paragraphsContainer.appendChild(newParagraph);
 
  // Проверяем и удаляем лишние параграфы
  removeFirstParagraphIfNeeded();
 
  // Очищаем поле ввода и обновляем состояние
  textInput.value = '';
  updateButtonState();
  updateCounter();
 
  // Прокручиваем к новому параграфу
  setTimeout(() => {
    newParagraph.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, SCROLL_DELAY);
 
  // Убираем класс анимации
  setTimeout(() => {
    newParagraph.classList.remove('new-paragraph');
  }, REMOVE_ANIMATION_DELAY);
}

/**
 * Функция для обновления счетчика параграфов
 */
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

/**
 * Функция для инициализации приложения
 * Вызывается при загрузке страницы
 */
function initializeApp() {
  // Обновляем счетчик и состояние кнопки
  updateCounter();
  updateButtonState();
 
  // Фокусируемся на поле ввода для удобства пользователя
  textInput.focus();
 
  console.log('Приложение инициализировано!');
}

/**
 * Функция для очистки всех параграфов (для тестов)
 */
function clearAllParagraphs() {
  paragraphsContainer.innerHTML = '';
  updateCounter();
}

// Назначаем обработчики событий
textInput.addEventListener('input', updateButtonState);
addButton.addEventListener('click', addNewParagraph);

// Обработчик для клавиши Enter
textInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && !addButton.disabled) {
    addNewParagraph();
  }
});

// Инициализируем приложение при загрузке DOM
document.addEventListener('DOMContentLoaded', initializeApp);

// Экспортируем функции для тестирования
// module.exports доступен только в Node.js среде (тесты)
// export доступен в браузерных модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    updateButtonState,
    addNewParagraph,
    updateCounter,
    createParagraphElement,
    removeFirstParagraphIfNeeded,
    clearAllParagraphs,
    initializeApp,
    MAX_PARAGRAPHS
  };
}