const path = require("path");
const webpack = require('webpack');



module.exports = {
    // webpack configuration with three properties: entry, output, and mode
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // tell webpack to use jquery npm package
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    mode: 'development'
};