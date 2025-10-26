// workingDOM.test.js - тесты для нашего приложения
// Для новичка: тесты - это сценарии, которые проверяют работает ли код правильно

/**
 * @jest-environment jsdom
 */

// Импортируем функции для тестирования
const {
  updateButtonState,
  addNewParagraph,
  updateCounter,
  createParagraphElement,
  removeFirstParagraphIfNeeded,
  clearAllParagraphs,
  MAX_PARAGRAPHS
} = require('../workingDOM.js');

// Подготовка DOM для тестов
beforeEach(() => {
  // Создаем минимальную структуру HTML
  document.body.innerHTML = `
    <input type="text" id="textInput">
    <button id="addButton"></button>
    <div id="paragraphsContainer">
      <p>Параграф 1</p>
      <p>Параграф 2</p>
    </div>
    <span id="counter">2</span>
  `;
});

// Группа тестов для updateButtonState
describe('updateButtonState', () => {
  test('кнопка должна быть disabled при пустом поле ввода', () => {
    // Подготовка
    const textInput = document.getElementById('textInput');
    const addButton = document.getElementById('addButton');
    
    textInput.value = '';
    updateButtonState();
    
    // Проверка
    expect(addButton.disabled).toBe(true);
  });

  test('кнопка должна быть enabled при заполненном поле ввода', () => {
    // Подготовка
    const textInput = document.getElementById('textInput');
    const addButton = document.getElementById('addButton');
    
    textInput.value = 'Новый текст';
    updateButtonState();
    
    // Проверка
    expect(addButton.disabled).toBe(false);
  });

  test('кнопка должна быть disabled при поле ввода только с пробелами', () => {
    // Подготовка
    const textInput = document.getElementById('textInput');
    const addButton = document.getElementById('addButton');
    
    textInput.value = '   ';
    updateButtonState();
    
    // Проверка
    expect(addButton.disabled).toBe(true);
  });
});

// Группа тестов для createParagraphElement
describe('createParagraphElement', () => {
  test('создает элемент параграфа с правильным текстом', () => {
    // Подготовка
    const text = 'Тестовый текст';
    
    // Действие
    const paragraph = createParagraphElement(text);
    
    // Проверка
    expect(paragraph.textContent).toBe(text);
    expect(paragraph.tagName).toBe('P');
    expect(paragraph.classList.contains('new-paragraph')).toBe(true);
  });
});

// Группа тестов для addNewParagraph
describe('addNewParagraph', () => {
  test('добавляет новый параграф при вызове', () => {
    // Подготовка
    const textInput = document.getElementById('textInput');
    const paragraphsContainer = document.getElementById('paragraphsContainer');
    const initialCount = paragraphsContainer.children.length;
    
    textInput.value = 'Новый параграф';
    
    // Действие
    addNewParagraph();
    
    // Проверка
    expect(paragraphsContainer.children.length).toBe(initialCount + 1);
    expect(textInput.value).toBe(''); // Поле должно очиститься
  });

  test('не добавляет параграф при пустом поле ввода', () => {
    // Подготовка
    const textInput = document.getElementById('textInput');
    const paragraphsContainer = document.getElementById('paragraphsContainer');
    const initialCount = paragraphsContainer.children.length;
    
    textInput.value = '';
    
    // Действие
    addNewParagraph();
    
    // Проверка
    expect(paragraphsContainer.children.length).toBe(initialCount);
  });
});

// Группа тестов для updateCounter
describe('updateCounter', () => {
  test('обновляет счетчик правильно', () => {
    // Подготовка
    const counterElement = document.getElementById('counter');
    const paragraphsContainer = document.getElementById('paragraphsContainer');
    const expectedCount = paragraphsContainer.children.length;
    
    // Действие
    updateCounter();
    
    // Проверка
    expect(counterElement.textContent).toBe(String(expectedCount));
  });

  test('меняет цвет при приближении к лимиту', () => {
    // Подготовка - создаем больше параграфов
    const paragraphsContainer = document.getElementById('paragraphsContainer');
    const counterElement = document.getElementById('counter');
    
    // Добавляем параграфы до лимита
    for (let i = paragraphsContainer.children.length; i < MAX_PARAGRAPHS - 1; i++) {
      const p = document.createElement('p');
      p.textContent = `Параграф ${i + 1}`;
      paragraphsContainer.appendChild(p);
    }
    
    // Действие
    updateCounter();
    
    // Проверка
    expect(counterElement.style.color).toBe('rgb(231, 76, 60)'); // #e74c3c в rgb
  });
});

// Группа тестов для removeFirstParagraphIfNeeded
describe('removeFirstParagraphIfNeeded', () => {
  test('удаляет первый параграф при превышении лимита', () => {
    // Подготовка
    const paragraphsContainer = document.getElementById('paragraphsContainer');
    
    // Добавляем параграфы сверх лимита
    while (paragraphsContainer.children.length <= MAX_PARAGRAPHS) {
      const p = document.createElement('p');
      p.textContent = 'Дополнительный параграф';
      paragraphsContainer.appendChild(p);
    }
    
    const firstParagraph = paragraphsContainer.children[0];
    const initialCount = paragraphsContainer.children.length;
    
    // Действие
    removeFirstParagraphIfNeeded();
    
    // Проверка - используем setTimeout так как удаление асинхронное
    setTimeout(() => {
      expect(paragraphsContainer.children.length).toBe(initialCount - 1);
      expect(paragraphsContainer.contains(firstParagraph)).toBe(false);
    }, 400);
  });
});