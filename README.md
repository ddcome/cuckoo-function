# cuckoo-function

- 常用函数库

## 快速上手直通车



## 如何使用cuckoo-function

```
npm install cuckoo-funciton

import CuckooFunction  from 'cuckoo-function';
console.log(CuckooFunction.add(1,2)); 

```

## 函数汇总列表

1. 数组操作

函数名称 | 函数描述 | 函数如何调用
---|---|---
unique | 数组去重 | CuckooFunction.unique(arr) 

2. 四则运算

函数名称 | 函数描述 | 函数如何调用
---|---|---
plus | 加法 | CuckooFunction.plus('0.001', '3243.32323')
subtraction | 减法 | CuckooFunction.subtraction('0.001', '3243.33')
multiplication | 乘法 | CuckooFunction.multiplication('0.001', '3')
division | 除法 | CuckooFunction.division('0.001', '3243.32323')

3. 浏览器类

函数名称 | 函数描述 | 函数如何调用
---|---|---
getExplore | 获取浏览器版本信息 | CuckooFunction.getExplore() 

4. 日期类

函数名称 | 函数描述 | 函数如何调用
---|---|---
getPreWeek | 获取前一个周 | CuckooFunction.getPreWeek('2019-11-11')或CuckooFunction.getPreWeek('2019.11.11')下同
getPreOneMouth | 获取前一个月 | CuckooFunction.getPreOneMouth('2019-11-11')
getPreYear | 获取前一年 | CuckooFunction.getPreYear('2019-11-11')
getPreThreeMouth | 获取前一个季度 | CuckooFunction.getPreThreeMouth('2019-11-11')
formatDate | 格式化时间 | CuckooFunction.dateFormat('YYYY-mm-dd', new Date()) 或 CuckooFunction.dateFormat('YYYY', new Date())
isLeapYear | 是否是闰年 | CuckooFunction.isLeapYear(2019)
getDaysForMonth | 获取指定月份的天数 | CuckooFunction.getDaysForMonth(2019, 12)

5. 数据字典类

函数名称 | 函数描述 | 函数如何调用
---|---|---
codeToName | 字典数据编码转中文  | CuckooFunction.codeToName({ '1000': 23, '4000': 3232},{'code': '21212', 'title': 'AAAAA', 'childrens': [{'code': '1000', 'title': '洛阳'}]})

6. 货币类

函数名称 | 函数描述 | 函数如何调用
---|---|---
numberToChinese | 数字转大写中文    | CuckooFunction.numberToChinese(21231) 

7. 校验类

函数名称 | 函数描述 | 函数如何调用
---|---|---
checkPhone | 是否是手机号 | CuckooFunction.checkPhone('13933333333')
checkTelephone | 是否是电话号码 |  CuckooFunction.checkTelephone('430-3333')
checkBankCard | 是否是银行卡号 |  CuckooFunction.checkBankCard('21232321321313')
checkEmail | 是否是email |  CuckooFunction.checkEmail('dsd@163.com')
checkIdCard | 是否是身份证  |  CuckooFunction.checkIdCard('153434366666666666')
isObj | 是否是Object |  CuckooFunction.isObj({})
isArray | 是否是数组  |  CuckooFunction.isArray([])
isEmpty | 是否是null或undefined类型 |  CuckooFunction.isEmpty('0')

8. 字符串类

函数名称 | 函数描述 | 函数如何调用
---|---|---
guid | uuid | CuckooFunction.uuid()
trim | 去掉两边空格 | CuckooFunction.trim(' d ')
trimLeft | 去掉左侧空格 | CuckooFunction.trimLeft(' d ')
trimRight | 去掉右侧空格 | CuckooFunction.trimRight(' d ')

## 函数详解



## 附件

### 如何构建函数库应用

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
console.log(CuckooFunction.add(1,2)); 

```







