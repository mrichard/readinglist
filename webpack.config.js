var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var CommonsChunkPlugin   = webpack.optimize.CommonsChunkPlugin;
var DedupePlugin   = webpack.optimize.DedupePlugin;

module.exports = {
	entry: {
		angular2: [
			// Angular 2 Deps
			'@reactivex/rxjs',
      		'zone.js',
			'reflect-metadata',
			// to ensure these modules are grouped together in one file
			'angular2/angular2',
			'angular2/core',
			'angular2/router',
			'angular2/http'
		],
		app: [path.resolve(ROOT_PATH, 'src/bootstrap')]
	},

	output: {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		extensions: ['', '.js', '.ts']
	},

	devServer: {
		inline: true,
		progress: true,
		hot: true
	},

	plugins: [
		new OccurenceOrderPlugin(),
      	new DedupePlugin(),

		new CommonsChunkPlugin({
			name: 'angular2',
			minChunks: Infinity,
			filename: 'angular2.js'
		}),
		new HtmlwebpackPlugin({
			title: 'Readling List App',
			template: 'src/public/index.html',
    		inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'typescript-simple-loader',
				exclude: [
					/node_modules/,
					/test/
				]
			}
		]
	}

};