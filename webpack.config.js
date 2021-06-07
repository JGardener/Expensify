// webpack.js.org

const path = require('path');

module.exports = {
  // Entry to the app. 
  entry: './src/app.js',
  // Output the final bundled file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
     loader: 'babel-loader',
     // test checks whether a file ends in .js or not. $ checks the end.
     test: /\.js$/,
     exclude: /node_modules/
    },
    {
      // The ? in here means the s is optional. So we can support scss and css files
     test: /\.s?css$/,
     use: [
      "style-loader",
      "css-loader",
      "sass-loader"
      ]
    }
  ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};

// Gotta teach Webpack how to compile JSX code into normal JS code
// To do this, you need loaders. 
//  -> Configuring the way Webpack behaves for specific files. 
// Step One: New local dependencies!
//  -> babel-loader@7.1.1 and babel-core@6.25.0
// Now we set up the loader.

// A recap: this covers from line 13 onward - > module
// We can't use JSX inside Webpack without teaching Webpack how to run Babel. 
// Babel will take our JSX and compile it into vanilla JS. 
// Babel does nothing without configuration, so we had to set it up to do that.
// The rules section is as follows: 
// We run a test! If the file ends in .js and doesn't sit inside the node_modules folder, 
// then run that file through Babel! :)