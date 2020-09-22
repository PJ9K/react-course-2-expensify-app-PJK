// hier alles zetten wat webpack moet doen, waar het moet lezen en wegschrijven
// node format

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// entry -> output
module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css') //argument is the name of the new file

  return {
    entry: './src/app.js', //input
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader', // run all .js files through babel except the node modules
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, // run all scss or css files through babel 
            use : CSSExtract.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            })
        }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
}
}


// loader om bv ES6 naar ES5 om te zetten of JSX naar JS

