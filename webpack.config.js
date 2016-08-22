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
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
    ]
	},
	devtool: ['cheap-source-map'],
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
}