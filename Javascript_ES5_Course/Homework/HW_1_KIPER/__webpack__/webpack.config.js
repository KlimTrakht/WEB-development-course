const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'public'),
    entry: path.resolve(__dirname, 'public/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist')
	},
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        quiet: true
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: './index.html'
		}),
        new BrowserSyncPlugin({
			server: {
				baseDir: ['dist']
			},
			port: 3000,
			host: 'localhost',
			open: false,
			files: [
				{
					//match: [ '../*.js'],
				}
			]
		})
    ]
}