const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['./app.js']
    },
    output: {
        filename: './dist/bundle.js',
        path: path.resolve('./'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './main.htm',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        },
        hash: true,
        stats: { children: false }
    })],
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};