# cuckoo-function
常用函数库

## 如何构建函数库应用

1.登陆
```
npm login
// 登陆过程中，如果有问题，出现403，一般有几种情况，一是因为发布包的名称与npm库重复；还有则是用户名错误等
```
2.初始化

```
// 配置函数库名、版本号、作者......
npm init

package name: (cuckoo-function) 
version: (1.0.0) 
description: 常用函数库
entry point: (index.js) 
test command: 
git repository: (https://github.com/ddcome/cuckoo-function.git) 
keywords: 函数库
author: ddcome
license: (ISC) 

```
3.webpack安装和配置

```
npm install --save-dev clean-webpack-plugin
```

```
// 根目录创建webpack.config.js
// node 核心模块，处理路径相关
const path = require('path')
// webpack插件，新版本用法发与webpack中文网上写的有点出入，需要注意
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入模板文件， 看你需不需要
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Biu', // Peanut 可以随便更换，不是固定值,是函数库名字，类似Jquery
  },
  plugins: [
         new CleanWebpackPlugin(),
        //  new HtmlWebpackPlugin({ template: './src/index.html' }),
        ],

}
```

4.安装其他的包babel


```
npm install --save-dev babel-loader @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

5.babel预设配置在根目录下创建配置文件babel.config.js或者.babelrc


babel.config.js
```
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];
module.exports = { presets };
```

.babelrc


```
{
    "presets": [
        [
          "@babel/env",
          {
            "targets": {
              "edge": "17",
              "firefox": "60",
              "chrome": "67",
              "safari": "11.1",
            },
            "useBuiltIns": "usage",
          },
        ],
      ],
    "plugins": []
  }
```

webpack配置babel-loader解析es6


```
module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
            ]
          }
```

6.开始编写


```
mkdir src
touch src/index.js

// index.js
function add(a, b) {
  return a + b
}
export default {add}
  
  
export default { add }
// 使用import引入 import Biu from 'biu-function'
// 这个Biu就是导出的default对象
// 使用 script标签引入，则需要使用Biu.default.add()
// Biu实在webpack.config.js定义的library的名字
```

7.构建与发布


```
"build": "webpack"
// "build": "webpack --config webpack.config.js"
  
"main": "dist/index.js"
   
npm run build // 相当于执行 webpck进行打包
npm publish // 直接发布
```

8.使用

```
npm install cuckoo-funciton


import CuckooFunction  from 'cuckoo-function';
console.log(CuckooFunction.add(1,2), 'Biu'); 

```

## 函数说明



## 日志




