const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    cache: true,
    devtool: 'eval',
    entry: './client/src/index.js',
    output: {
        path: path.resolve('./client/public'),
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                sourceMap: true
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    mode: 'production'
}
