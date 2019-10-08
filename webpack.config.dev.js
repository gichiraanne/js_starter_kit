import path from 'path';

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
