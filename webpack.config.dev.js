const merge = require('webpack-merge');

const config = require('./webpack.config');

module.exports = merge(config, {
    devServer: {
        historyApiFallback: true
    },
    output: {
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    }
});