var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
 var CleanWebpackPlugin = require("clean-webpack-plugin");

 var extractPlugin =  new MiniCssExtractPlugin({

      filename: "[name].css",
      chunkFilename: "[id].css"
    });

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {


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
filename: "[name].bundle.js"
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
						test: /\.(vtt|ttf|eot|png|jpg|gif|ico|woff|srt)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
						loader: 'file-loader'
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
			},
                    {
					test: /\.css$/,
					 use:['style-loader','css-loader']

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
				}

			]

        },
        resolve: {
          extensions: ['*', '.js', '.jsx']
        },
        		plugins: [
		          extractPlugin,
		         new HtmlWebpackPlugin({
		        	 template : 'src/index.html',
               chunksSortMode:"none"
		         }),
		         new CleanWebpackPlugin(['dist'])
		          ]
};

module.exports = config;
