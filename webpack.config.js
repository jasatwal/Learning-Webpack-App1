// __dirname is a constant in node.js and is a reference to the current working directory

const path = require("path");

const config = {
    entry: "./src/index.js",
    output: {
        // This has to an absolute path
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    // i.e. loader (webpack 1)/module rules (webpack 2)
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/
            }
        ]
    }
};

module.exports = config;