const   path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, "./dist/app"),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
                //allows for import of styles (import css from 'file.css');
            },
            {  
                test: /\.js$|\.jsx$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {}
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    plugins: [],
    externals: {}
    //devtool: 'source-map'
};

