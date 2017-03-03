const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: { compact: false } }
        ]
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    // ],
    // watch: true,
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 4222,
        // compress: true,
    }
};