---
title: grid-网格系统
---

# grid-网格系统
`24` 网格系统，将设计建议区域按照 `24` 等分的原则进行划分。

## 概述
布局的网格化系统，我们是基于行（`row`）和列（`col`）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

通过`row` 在水平方向建立一组`column`（简写`col`） 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素 网格系统中的列是指 `1` 到 `24` 的值来表示其跨越的范围。

### Flex布局
网格化系统支持 `Flex` 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。 `Flex` 布局是基于 `24` 网格来定义每一个『盒子』的宽度，但不拘泥于网格。

## 组件注册

```vue
<script>
    import {Row,Col} from "origin-ui"
    export default {
      components: {"o-row":Row,"o-col":Col}
    }
</script>
```

## 基本使用

基础网格：
<gridDemo1></gridDemo1>

代码：此处`CSS`样式只是用于展示，可自己调整
```vue
<template>
  <div>
    <o-row class="rowDemo">
      <o-col span="12">col-12</o-col>
      <o-col span="12">col-12</o-col>
    </o-row >
    <o-row class="rowDemo">
      <o-col span="8">col-8</o-col>
      <o-col span="8">col-8</o-col>
      <o-col span="8">col-8</o-col>
    </o-row>
    <o-row class="rowDemo">
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
    </o-row>
  </div>
</template>

<style>
  .rowDemo{
    margin-top: 10px;
  }
</style>
```

网格布局：改变"align"的参数
<gridDemo2></gridDemo2>

代码：
```vue
<template>
  <div>
    靠左
    <o-row align="left">
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
    </o-row>
    居中
    <o-row align="center">
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
    </o-row>
    靠右
    <o-row align="right">
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
    </o-row>
  </div>
</template>
```

网格间隔：改变`"gutter"` 的参数，单位`px`
<gridDemo3></gridDemo3>

代码：
```vue
<template>
  <div>
    <o-row gutter="20">
      <o-col span="6">
        <div>col-6</div>
      </o-col>
      <o-col span="6">
        <div>col-6</div>
      </o-col>
      <o-col span="6">
        <div>col-6</div>
      </o-col>
      <o-col span="6">
        <div>col-6</div>
      </o-col>
    </o-row>
  </div>
</template>
``` 

网格偏移：改变`"offset"` 参数
<gridDemo4></gridDemo4>

代码：

```vue
<template>
  <div>
    <o-row>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="5" offset="1">col-5 offset-1</o-col>
    </o-row>
    <o-row>
      <o-col span="6">col-6</o-col>
      <o-col span="6">col-6</o-col>
      <o-col span="4" offset="2">col-4 offset-2</o-col>
      <o-col span="5" offset="1">col-5 offset-1</o-col>
    </o-row>
  </div>
</template>
```

响应式布局：
<gridDemo5></gridDemo5>

代码：
```vue
<template>
  <div>
    <o-row>
      <o-col span="2"
             :ipad="{span:'8'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'16'}"
             :wide-pc="{span:'22'}"
      <o-col span="22"
             :ipad="{span:'16'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'8'}"
             :wide-pc="{span:'2'}"
    </o-row>
  </div>
</template>
```

## API参数
### Row
|     属性      |                 说明                    | 类型              |   默认值  |   可选值     |
| ------------ |:--------------------------------------: | :-------:        | :-------:| :---------: |
| gutter       | 网格间隔，支持输入字符串或者数字，  输出像素值 | [String,Number]  |    -     |     -       |
| align        | flex下的水平布局方式，start，  center，end  | String           |    -     | [left,center,right] |

### Col
|     属性      |                 说明                    | 类型              |   默认值  |   可选值     |
| :------------: |:--------------------------------------: | :-------:        | :-------:| :---------: |
| span       | 网格占位格数，为 0 时相当于 display:  none | [String,Number]  |    -     |     0到24内的数值       |
| offset        | 网格左侧的间隔格数，间隔内不可以有网  格  | [String,Number]           |    -     | -|
| ipad       | ≥576px 响应式网格，可为网格数或一个  包含其他属性的对象 | Object  |    -     |     {span,offset}       |
| narrowPc        | ≥769px 响应式网格，可为网格数或一个  包含其他属性的对象  | Object           |    -     | {span,offset}|
| pc       | ≥993px 响应式网格，可为网格数或一个  包含其他属性的对象 | Object  |    -     |     {span,offset}       |
| widePc        | ≥1201px 响应式网格，可为网格数或一个  包含其他属性的对象  | Object           |    -     | {span,offset}|