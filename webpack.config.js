const { VueLoaderPlugin } = require(`vue-loader`);
const path = require(`path`);
const {CleanWebpackPlugin}  = require("clean-webpack-plugin");


const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const webpack = require("webpack");

const env = "development";
function resolve(dir) {
    return path.join(__dirname, dir);
}

const config = {
    entry: {
        app: [path.join(__dirname, `src`, `index.js`)]
    },
    mode: env,
    output: {
        publicPath: `/`
    },
    resolve: {
        alias: {
            "@": resolve("src/app/dist/components")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: `vue-loader`,
                        options: {
                            transformAssetUrls: {
                                source: "./src/"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [{ loader: `css-loader` }]
            },
            {
                test: /\.js$/,
                loader: `babel-loader`,
                include: [path.join(__dirname, `src`)]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: `style-loader`
                    },
                    { loader: `css-loader` },
                    {
                        loader: `less-loader`
                    }
                ]
            },
            {
                test: /\.styl/,
                use: [
                    {
                        loader: `style-loader`
                    },
                    { loader: `css-loader` },
                    {
                        loader: `stylus-loader`
                    }
                ]
            },
            {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
                loader: `url-loader`,
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, `public`, `index.html`),
            inject: true,
            env: "production",
            hash: true,
            minify: false,
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
};

if (env !== `development`) {
    config.plugins.push(new MiniCssExtractPlugin());
} else {
    config.entry.app.unshift("webpack-hot-middleware/client");
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;