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
