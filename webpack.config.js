const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "static/js")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', // 3. inject styles into dom
                    'css-loader',     // 2. turn css into common js
                    'sass-loader'     // 1. turns sass into css
                ],
            },

        ],
    },

}