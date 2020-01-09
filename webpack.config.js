const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/index.jsx',

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: "",
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: { config: { path: `./postcss.config.js` } }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            },
        ]
    },

    plugins: [
        new CopyPlugin([
            {
                from: 'src/images/',
                to: './images/',
                toType: 'dir'
            }
        ]),
        new HtmlWebpackPlugin({
            favicon: "src/images/favicon.png",
            template: "src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'docs'),
        port: 9000,
        watchContentBase: true
    }
};