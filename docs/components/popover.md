---
popover-气泡卡片
---

# popover-气泡卡片
点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 组件注册
```vue
<script>
    import {Popover, Button} from "origin-ui"
    export default {
      components: {
        'o-popover': Popover,
        'o-button': Button
      }
    }
</script>
```

## 基本使用
**效果：**
<popoverDemo></popoverDemo> 

代码：
```vue
<template>
  <div>
    <div class="click">
      <div>点击弹出</div>
      <o-popover position="top">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>上方弹出</o-button>
      </o-popover>
      <o-popover position="bottom">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>下方弹出</o-button>
      </o-popover>
      <o-popover position="left">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>左边弹出</o-button>
      </o-popover>
      <o-popover position="right">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>右边弹出</o-button>
      </o-popover>
    </div>
    <div class="hover">
      <div>鼠标悬浮</div>
      <o-popover position="top" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>上方弹出</o-button>
      </o-popover>
      <o-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>下方弹出</o-button>
      </o-popover>
      <o-popover position="left" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>左边弹出</o-button>
      </o-popover>
      <o-popover position="right" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>右边弹出</o-button>
      </o-popover>
    </div>
  </div>
</template>
```

## API参数
|     属性      | 说明           | 类型      |   默认值  |   可选值   |
| :------------: |:-------------: | :-------: | :--------: | :---------: |
| position         | 设置弹出位置    | String  |    top     |  [top, bottom, left, right]         |
| trigger | 设置触发方式      | String  |   click	  |     [click, hover]      |
