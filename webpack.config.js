const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [new CopyPlugin({
        patterns: [{
            from: path.resolve(__dirname, './src/images'),
            to: path.resolve(__dirname, 'dist/images')
        },
        {
            from: path.resolve(__dirname, './src/fonts'),
            to: path.resolve(__dirname, 'dist/fonts')
        },
        {
            from: path.resolve(__dirname, './src/css'),
            to: path.resolve(__dirname, 'dist/css')
        },
        ]
    }),
    ],
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }

    },
};