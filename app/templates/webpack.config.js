const   path = require('path');

module.exports = {
    entry: './src/app/App.js',
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
                    options: {
                        "presets": [
                            ["es2015", {"modules": false}],
                            "react",
                            "stage-0"
                        ],
                        plugins: []
                    }
                }
            },
            ,
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['file-loader']
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

