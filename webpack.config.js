const path = require('path');

module.exports = {
    context: path.join(_dirname, 'src'),
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(_dirname, 'www'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: [
                    /\.js$/,
                    /\.es6$/
                ],
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            }
        ]
    },
    resolve: {
        modules: [
            path.join(_dirname, 'node_modules')
        ]
    },
    watch: false
};