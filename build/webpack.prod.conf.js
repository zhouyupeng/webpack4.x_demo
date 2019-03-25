const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");
//4.x之后用以压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
//4.x之后提取css
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigProd = {
	mode: 'production', // 通过 mode 声明生产环境
	output: {
		path: path.resolve(__dirname, '../dist'),
		// 打包多出口文件
		// 生成 a.bundle.[hash].js  b.bundle.[hash].js
		filename: './js/[name].[chunkhash:8].js',
		publicPath: './'
	},
	devtool: 'none',
	plugins: [
		//删除dist目录
		new cleanWebpackPlugin({
			// verbose Write logs to console.
			verbose: false, //开启在控制台输出信息
			// dry Use boolean "true" to test/emulate delete. (will not remove files).
			// Default: false - remove files
			dry: false,
		}),
		// 分离css插件参数为提取出去的路径
		new miniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].min.css',
		}),
		//压缩css
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
		//上线压缩 去除console等信息webpack4.x之后去除了webpack.optimize.UglifyJsPlugin
		//https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options
		new UglifyJSPlugin({
			uglifyOptions: {
				compress: {
					warnings: false,
					drop_debugger: false,
					drop_console: true
				}
			}
		})
	],
	module: {
		rules: []
	},

}

if(process.env.npm_config_report){//打包后模块大小分析//npm run build --report
	const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
	webpackConfigProd.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = merge(webpackConfigBase, webpackConfigProd);