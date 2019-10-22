import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  //debug: true,
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
		//create html file that includes reference to bundle.js
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true //this injects any scripts that we need so the script tag in index.html is no longer necessary
		}),
		//eliminate duplicate packages when generating bundle
		webpack.optimize.DedupePlugin(),

		//minify css
		webpack.optimize.UglifyJsPlugin()
  ],
  module: {
		rules: [
			{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		}
		]

	}
}
