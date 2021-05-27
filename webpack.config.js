const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['./app.js']
    },
    output: {
        filename: './dist/js/bundle.[hash].js',
        path: path.resolve('./'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './main.htm',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        },
        hash: false,
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
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: false
                        }
                    }
                ]
            }
        ]
    }
};
