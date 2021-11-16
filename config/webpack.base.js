const path = require('path')
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPahtsPlugin = require('tsconfig-paths-webpack-plugin')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')

module.exports = {
  //  entry: '../src/index.tsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
          // 开启babel缓存
          cacheDirectory: true
        }
      },
      // {
      //    test: /\.css$/,
      //    use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {}
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'imgs/[name]_[hash:8][ext]',
              fallback: 'file-loader?name=imgs/[name]_[hash:8][ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], //该参数将.jsx添加进去，可以再 js中 import加载.jsx
    plugins: [
      new TsconfigPahtsPlugin({
        // 配置文件引入 tsconfig.json
        configFile: path.join(__dirname, '../tsconfig.json')
      })
    ]
  },
  plugins: [
    // 将css提取成单独的文件
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `../public/index.html`),
      title: '学习'
      // filename: path.join(__dirname, '../public/index.html')
    }),
    new AntDesignThemePlugin({
      antDir: path.join(__dirname, '../node_modules/antd'), //antd包位置
      // stylesDir: path.join(__dirname, './src/styles/theme'), //主题文件所在文件夹
      varFile: path.join(__dirname, '../src/styles/theme/variables.less'), // 自定义默认的主题色
      mainLessFile: path.join(__dirname, '../src/styles/common/index.less'), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
      outputFilePath: path.join(__dirname, '../public/color.less'), // 输出的位置
      themeVariables: ['@primary-color', 'primary-color', 'warning-color', 'success-color', 'info-color'],
      indexFileName: '../public/index.html',
      generateOnce: false
    })
  ]
}
// 'primary-color': '#4caf50',
// 'warning-color': '#fb8c00',
// 'success-color': '#4caf50',
// 'info-color': '#2196f3'
