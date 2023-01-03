const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    target: 'web',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    }
                }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 4001,
                proxy: 'http://localhost:4000/'
            },
            { reload: true }
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};