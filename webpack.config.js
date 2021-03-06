const path = require('path');

module.exports = {
  entry: '.app/javascript/channels/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};