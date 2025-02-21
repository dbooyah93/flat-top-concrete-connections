const path = require( 'path' );
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before

  return {
    entry:{
       main: './client/src/index.jsx',
       contactMe: './client/src/pageChunks/contactMe.tsx'
    },
    output: {
      path: path.join( __dirname, '/client/dist' ),
      filename: './[name]/[name].bundle.js' 
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          exclude: /(node_modules|bower_components)/,
          test: /\.(js|jsx)?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: [
            '/node_module/'
          ]
        },
        {
          exclude: /node_modules/, // Exclude node_modules
          test: /\.(ts|tsx)$/, // Match TypeScript and TSX files
          use: "ts-loader", // Use ts-loader to transpile
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },

      ]
    },
    optimization: {
      splitChunks: {
        chunks: "async", // Use "all" to split all chunks, or "async" to only split dynamically imported chunks
        cacheGroups: {
          default: false, // Disable default caching
          vendors: false, // Disable vendor chunk creation
        },
      }
    },
    devtool: "source-map", // Generate source maps for easier debugging
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"), // Serve files from "dist"
      },
      compress: true, // Enable gzip compression
      port: 3000, // Port for the development server
    },
  }
};