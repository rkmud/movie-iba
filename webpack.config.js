const path = require('path');
const HTMLWebpackPlagin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: { 
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlagin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@store': path.resolve(__dirname, './src/store'),
            '@root': path.resolve(__dirname, './src'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@types': path.resolve(__dirname, './src/types'),
          },
    },
    devServer: {
        historyApiFallback: {
          index: '/',
          rewrites: [
            { from: /^\/api\/(.*)/, to: function(context) { return '/v1.4/movie/' + context.match[1]; } }
          ]
        }
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }, 
            
            }, 
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            
            }, 
            {
                test: /.(s*)css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },
            {
                test: /.(svg|png|jpg)$/,
                use: 'file-loader'
            },  
            {
                test: /\.css$/,  
                use: ['style-loader', 'css-loader'], 
            },
           
           
            
        ]
    }
}