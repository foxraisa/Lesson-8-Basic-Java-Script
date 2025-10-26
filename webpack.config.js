const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack - это инструмент, который собирает все наши файлы в один или несколько бандлов (пакетов)
// Для новичка: представьте, что Webpack - это упаковщик, который берет все ваши файлы и аккуратно складывает их в коробки

module.exports = {
  // Точка входа - главный файл, с которого начинается приложение
  entry: './src/index.js',
  
  output: {
    // Куда положить собранные файлы
    path: path.resolve(__dirname, 'dist'),
    // Имя основного файла
    filename: 'bundle.js',
    // Очищать папку dist при каждой сборке
    clean: true
  },
  
  module: {
    rules: [
      {
        // Для CSS файлов используем style-loader и css-loader
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Для HTML файлов (хотя мы используем HtmlWebpackPlugin)
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        // Для JavaScript файлов используем babel
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  
  plugins: [
    // Этот плагин автоматически добавляет скрипты в HTML
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  
  // Настройки dev-сервера для разработки
  devServer: {
    static: './dist',
    open: true, // Автоматически открывать браузер
    hot: true,  // Горячая перезагрузка
    port: 3000  // Порт для разработки
  },
  
  // Помогает в отладке - показывает где именно произошла ошибка
  devtool: 'source-map'
};
