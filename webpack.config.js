const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję bibliotekę [path] z [node.js]
module.exports = {
    entry: './assets/js/script.js',
    // definiuję plik wejściowy
    output: {
        path: path.resolve(__dirname, 'build'),
        // definiuję ścieżkę wyjściową
        filename: 'script.min.js',
        // definiuję nazwę pliku wyjściowego
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        static: './',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // określam, jakie pliki
                // będą brane pod uwagę
                exclude: /node_modules/,
                // określam wykluczenia
                use: 'babel-loader',
                // określam, jaki [loader]
                // ma być wykorzystany
                }
        ]
        // obecnie brak dodatkowych ustawień
    },
}
// eksportuję ustawienia dla webpacka