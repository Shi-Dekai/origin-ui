# 原点 - 一个 Vue UI 原件

    作者：史德凯
## 介绍

这是我学习 Vue 过程中做的一个 UI 框架，希望对你有用。
  
## 开始使用
  
1. 添加 `css` 样式  
使用本框架前，请在 `css` 中开启 `border-box`

```css
*,*::before,*::after{box-sizing: border-box}
```
`IE 8` 及以上浏览器都支持此样式。

2. 安装 `origin-ui`
```
npm i --save origin-ui
``` 
3. 引入 `origin-ui`
```vue
import {Button, ButtonGroup, Icon} from 'origin-ui'
import 'origin-ui/dist/index.css'

  export default {
    name: 'App',
    components: {
      'o-button':Button
    }
  }
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码