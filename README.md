# React-Webpack-Firebase ChatApp
```
//the most commonet Webpack example
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ]
}
```
## Let's try set up a simple webpack first!

1) Install Webpack
```
<!--should not install webpack goble -->

npm install --save-dev webpack

<!--When I use the sourc-map or loader webpack-dev-->
npm install --save-dev webpack-dev-server
```

2) Create a greeting.js
```
//require the main.js
var greeter = require('././main');
document.getElementById('root').appendChild(greeter());
```

3) Create a main.js
```
// explort the greeting.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};
```

4) Develop a basic webpack.config.js
```
var path = require('path');
var webpack = require('webpack');

module.exports={
  entry:  {
    main: [
      './main.js',
      './greeting.js'
    ]
  },
  output: {
      filename:'./public/[name].js'
    }
}
```

5) Then run 'node_modules/.bin/webpack'
```
   [85] multi (webpack)-dev-server/client?http://localhost:8080
 ./main.js ./greeting.js 52 bytes {0} [built]
     + 71 hidden modules
webpack: Compiled successfully.
```

6) Weboack create a public folder with main.js file inside

## Babel
```
// npm一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```


## React & React-DOM
```
npm install --save react react-dom
```
