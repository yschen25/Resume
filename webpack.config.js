const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: ['./js/index.js']
    },
    output: {
        filename: './dist/bundle.js',
        path: path.resolve('./'),
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./dist/[name].css"
        })
    ]
};