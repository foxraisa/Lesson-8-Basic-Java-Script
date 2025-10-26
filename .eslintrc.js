module.exports = {
  // ESLint - это линтер, который проверяет код на ошибки и стилистические проблемы
  // Для новичка: это как учитель, который проверяет ваше сочинение на грамматические ошибки
    
  env: {
    browser: true,    // Код выполняется в браузере
    es2021: true,     // Используем современный JavaScript
    jest: true,       // Для тестов
    node: true        // Для Node.js (Webpack)
  },
  
  extends: [
    'eslint:recommended' // Используем рекомендованные правила
  ],
  
  parserOptions: {
    ecmaVersion: 12,    // Версия JavaScript
    sourceType: 'module' // Поддержка модулей
  },
  
  rules: {
    // Правила для новичков - не слишком строгие но полезные
    
    // Запрещает использование console.log в продакшене (но разрешает в разработке)
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    
    // Запрещает неиспользуемые переменные
    'no-unused-vars': 'warn',
    
    // Требует точку с запятой в конце выражений
    'semi': ['error', 'always'],
    
    // Использовать одинарные кавычки для строк
    'quotes': ['error', 'single'],
    
    // Отступы - 2 пробела
    'indent': ['error', 2],
    
    // Запрещает смешивание табов и пробелов
    'no-mixed-spaces-and-tabs': 'error'
  }
};