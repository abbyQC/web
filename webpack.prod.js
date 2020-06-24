const path = require("path");
const common = require("./webpack.conmmon");
const merge = require("webpack-merge");
module.exports = merge(common, {
    mode: "production",

    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "static/js/webpack")
    },

});