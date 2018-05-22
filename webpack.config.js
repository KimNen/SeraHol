
'use strict';
const
    webpack = require('webpack'),
    loader = __dirname + '/webpack.loader',
    path = require('path');
const APP_PATH = path.join(__dirname, 'js/source');
const APP_SRC_PATH = path.join(__dirname, 'js/source');
const PKG = require(path.join(__dirname, 'package.json'));
const MODULES = PKG.dependencies;
const EXCLUDED_SRC = /(__tests__|node_modules)/;


var fs=require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    cache: false,
    context: APP_PATH,
    entry: {
        App : path.join(APP_PATH, 'App.js')
    }

    ,
    target: 'web',
    output: {
        path: __dirname + '/js/build',
        pathinfo: true,
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: EXCLUDED_SRC,
                include: [
                    APP_SRC_PATH
                ],
                loader: loader
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'es2015',
                        "react",
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    
    plugins:[
        new webpack.ProvidePlugin({
            "React": "react",
          }),
    ],

};

