const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
const webpack = require('webpack');
const WebpackPwaManifest = require("webpack-pwa-manifest");



module.exports = {
    // webpack configuration with three properties: entry, output, and mode
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'   
    },
    // to user file loader and image compress
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        // change the image path to readable
                        options: {
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace('../', '/assets/');
                            }
                        }
                    },
                    // compress the image size
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    // tell webpack to use jquery npm package
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new BundleAnalyzerPlugin({
            // the analyze report outputs to an HTML file in the dist folder
            analyzerMode: 'static',
        }),
        new WebpackPwaManifest({
            name: "Food Event",
            short_name: "Foodies",
            description: "An app that allows you to view upcoming food events.",
            start_url: "../index.html",
            background_color: "#01579b",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
              src: path.resolve("assets/img/icons/icon-512x512.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join("assets", "icons")
            }]
        })
    ],
    mode: 'development'
};
