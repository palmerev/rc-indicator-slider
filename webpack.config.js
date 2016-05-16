var path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
            },
            {
              test: /\.css$/,
              loaders: ["style", "css"]
            }
        ]
    }
}
