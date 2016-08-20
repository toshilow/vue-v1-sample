var path = require('path')

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
    ]
	},
	devtool: ['cheap-source-map']
}