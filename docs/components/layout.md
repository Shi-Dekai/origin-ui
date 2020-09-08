---
title: layout-布局
---

# layout-布局
协助进行页面级整体布局。

## 组件注册

```vue
<script>
    import {Layout,Header,Footer,Content,Sider} from "origin-ui"
    export default {
        components:{
            "o-layout":Layout,
            "o-header":Header,
            "o-footer":Footer,
            "o-content":Content,
            "o-sider":Sider,
        }
    }
</script>
```

## 基本使用

**效果：** 
<layoutDemos></layoutDemos>

代码：`CSS` 此处CSS样式只是用于展示，可自己调整
```vue
<template>
  <div>
    <div>
      <div>默认布局</div>
      <o-layout>
        <o-header></o-header>
        <o-content></o-content>
        <o-footer></o-footer>
      </o-layout>
    </div>
    <div>
      <div>带有侧边栏布局</div>
      <o-layout>
        <o-header></o-header>
        <o-layout>
          <o-sider></o-sider>
          <o-content></o-content>
        </o-layout>
        <o-footer></o-footer>
      </o-layout>
      <div>侧边栏靠右</div>
      <o-layout>
        <o-header></o-header>
        <o-layout>
          <o-content></o-content>
          <o-sider></o-sider>
        </o-layout>
        <o-footer></o-footer>
      </o-layout>
      <div>左右布局</div>
      <o-layout>
        <o-sider></o-sider>
        <o-layout>
          <o-header></o-header>
          <o-content></o-content>
          <o-footer></o-footer>
        </o-layout>
      </o-layout>
    </div>
  </div>
</template>
```
