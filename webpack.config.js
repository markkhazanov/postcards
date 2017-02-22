const path = require('path');
 
/*
You will set a few configuration options in this file. Here is the breakdown for each one, along with a link to the relevant portion of the Webpack docs:

context: This is the path to your client-side JavaScript folder. This must be an absolute path.

entry: This is the entry point for your application.

loaders (module.rules): This section specifies how each file should be processed before it is combined into your bundle. We only have one loader: Babel. This converts your ES6 + JSX JavaScript into ES5 before merging it into your bundle.

resolve: Where Webpack should look for files referenced by an import or require() statement. This makes it so that you can import npm packages in your code.

*/


module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,         // Match both .js and .jsx files
      exclude: /node_modules/, 
      loader: "babel", 
      query:
        {
          presets:['react']
        }
    }],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};