const TerserPlugin       = require('terser-webpack-plugin');
const webpack            = require('webpack');
const pkg                = require('./package');

const banner = `${pkg.name}-setup ${pkg.version}\nCopyright (c) ${new Date().getFullYear()} ${pkg.author}\nLicense: ${pkg.license}`;

const webpackConfig = {
	context: __dirname,
	entry: './setup.js',
	output: {
		path: __dirname,
		filename: 'setup.min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				sideEffects: true,
			},
		],
	},
	plugins: [
		new webpack.BannerPlugin(banner),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						'reduce_vars': false,
					},
					mangle: true,
					output: {
						comments: /^\**!|@preserve|license|@cc_on/i,
					},
				},
				extractComments: false,
			}),
		],
	},
};

module.exports = webpackConfig;
