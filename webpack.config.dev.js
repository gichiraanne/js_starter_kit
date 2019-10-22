import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  //debug: true,
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
		//create html file that includes reference to bundle.js
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true //this injects any scripts that we need so the script tag in index.html is no longer necessary
		})
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

	},
	mode: 'development'
}
