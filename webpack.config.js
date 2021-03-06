// __dirname is a constant in node.js and is a reference to the current working directory

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/index.js",
    output: {
        // This has to an absolute path
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        // url-loader reads this property... :(
        publicPath: "build/"
    },
    // i.e. loader (webpack 1)/module rules (webpack 2)
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/
            },
            {
                // Is applied right to left (css-loader is loaded first)
                //use: ["style-loader", "css-loader"],

                // Need to use legacy property because of extract-text-webpack-plugin
                loader: ExtractTextPlugin.extract({
                    loader: "css-loader"
                }),
                test: /\.css$/
            },
            {
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 40000 }
                    },
                    "image-webpack-loader"
                ],
                test: /\.(jpe?g|png|gif|svg)$/
            }
        ]
    },
    plugins: [
        // Does the heavy-lifting of extracting text
        new ExtractTextPlugin("style.css")
    ]
};

module.exports = config;