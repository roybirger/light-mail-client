const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './'
    },

    context: resolve(__dirname, 'src'),

    output: {
        path: resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {modules: false }],
                        'react',
                        'es2015',
                        'stage-0'
                    ]
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    plugins: [
        new HtmlPlugin({
            title: 'Light Mail'
        })
    ]

}