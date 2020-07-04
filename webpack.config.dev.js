'use strict'
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "static/js")
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin
    ]
}