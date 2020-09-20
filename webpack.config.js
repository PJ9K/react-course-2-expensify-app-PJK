// hier alles zetten wat webpack moet doen, waar het moet lezen en wegschrijven
// node format


const path = require('path')

// entry -> output
module.exports = {
    entry: './src/app.js', //input
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader', // run all .js files through babel except the node modules
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, // run all scss or css files through babel 
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}

// loader om bv ES6 naar ES5 om te zetten of JSX naar JS

