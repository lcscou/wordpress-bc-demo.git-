const path = require("path");

// include the js minification plugin
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");
// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: `babel-loader`,
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.json$/,
                loader: `json-loader`,
            },
            {
                test: /\.txt$/,
                loader: `raw-loader`,
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?(\?[0-9a-zA-Z]*)?$/,
                loader: `file-loader?esModule=false&name=.src/fonts/[hash].[ext]`,
            },
            {
                test: /\.(mp4|webm|wav|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?(\?[0-9a-zA-Z]*)?$/,
                loader: `file-loader?name=./medias/[hash].[ext]`,
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    `file-loader?esModule=false&name=./src/images/[name].[ext]`,
                    {
                        loader: `image-webpack-loader`,
                        query: {
                            mozjpeg: {
                                quality: 75,
                                progressive: true,
                                optimizationLevel: 4,
                                interlaced: false,
                            },
                            pngquant: {
                                quality: `65-90`,
                                speed: 4,
                            },
                            optipng: {
                                optimizationLevel: 3,
                            },
                            gifsicle: {
                                optimizationLevel: 1,
                            },
                            svgo: {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                    {
                                        removeEmptyAttrs: false,
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            // styles loaders
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin("dist", {}),
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
        }),
    ],
    optimization: {
        minimizer: [
            // enable the js minification plugin
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
            }),
            // enable the css minification plugin
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    watch: true,
};