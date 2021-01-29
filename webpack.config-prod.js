var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
 var CleanWebpackPlugin = require("clean-webpack-plugin");
 var BrotliPlugin = require('brotli-webpack-plugin');
 var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// var extractPlugin = new MiniCssExtractPlugin({
// 	filename: 'main.css'
// });
 var extractPlugin =  new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    });
var AnalyzerPlugin = new BundleAnalyzerPlugin({analyzerMode:"static"})

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
//devtool: 'inline-source-map',
//devtool: 'eval-source-map',
externals: {
  'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
    serverUrl: "https://myserver.com"
  } : {
    serverUrl: "http://gnyann.com"
  })
},
devtool: false,
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/",
        chunkFilename:"[name].bundle.js",
publicPath: "/",
///ReactDev/dist/app
filename: "[name].bundle.js"
    },
    optimization:{
      splitChunks:{
        cacheGroups:{
          commons:{
            test:/[\\/]node_modules[\\/]/,
            name:"vendor",
            chunks: "all"
          }
        }
      },
      runtimeChunk:{
        name: "manifest"
      }
    },
     devServer: {
disableHostCheck: true,
inline: true,
    historyApiFallback: true,
    stats: 'minimal'
  },
		module:{
			rules: [
			        {
			        	test: /\.(js|jsx)$/,
			        	use:[{
			        		loader:'babel-loader',
			        		 options: {
			        		        presets: ['@babel/preset-react','@babel/preset-env']
			        		      }
			        	}

			        	     ]
                    },
                    {
					test: /\.css$/,
					 use:[MiniCssExtractPlugin.loader,'css-loader']

                },
                    	{
					test: /\.scss$/,
					use: [MiniCssExtractPlugin.loader,
					      'css-loader',
				          'sass-loader'
				          ]

                }

                ,
				{
					test:/\.html$/,
					use:['html-loader']
				},
				{
					test: /\.(jpg|png|gif|vtt)$/ ,
					use:
						[
						 {
							 loader:'file-loader',
							 options:{
								 name:'[name].[ext]',
								 outputPath:'img/',
								 publicPath:'img/'
							 }
						 }]


				},
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        }

			]

        },
        resolve: {
          extensions: ['*', '.js', '.jsx']
        },
        		plugins: [
		          extractPlugin,
              AnalyzerPlugin,
		         new HtmlWebpackPlugin({
		        	 template : 'src/index.html',
               chunksSortMode:"none"
		         }),
		         new CleanWebpackPlugin(['dist']),
             new BrotliPlugin({
           asset: '[path].br[query]',
           test: /\.(js|css|html|svg)$/,
           threshold: 10240,
           minRatio: 0.8
       }),
       new UglifyJsPlugin({
   cache: true,
   parallel: true,
   sourceMap: true
 })
		          ]
};

module.exports = config;
