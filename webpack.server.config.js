const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        server: path.join(__dirname, 'src/server/server.js'),
    },
    output: {
        path: path.join(__dirname, 'server'),
        filename: "[name].js"
    },
    target: "node",
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()], // Только для express приложений
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"   // Перекомпилируем es6+ в es5
            }]
    },
    plugins: [new CleanWebpackPlugin()]
};