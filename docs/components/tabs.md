---
title: tabs-标签
---

# tabs-标签
选项卡切换组件。

## 组件注册
```vue
<script>
    import {Tabs,TabsBody,TabsHead,TabsItem,TabsPane,Button} from "origin-ui"
    export default {
      components: {
        "o-tabs":Tabs,
        "o-tabs-head":TabsHead,
        "o-tabs-body":TabsBody,
        "o-tabs-item":TabsItem,
        "o-tabs-pane":TabsPane
      }
    }
</script>
```
## 基本使用
**效果：**
<tabsDemo></tabsDemo>

代码：
```vue
<template>
  <div class="wrapper">
    默认标签
    <o-tabs :selected="selectedTab">
      <o-tabs-head>
        <o-tabs-item name="sport">体育</o-tabs-item>
        <o-tabs-item name="game">游戏</o-tabs-item>
        <o-tabs-item name="book">书籍</o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="sport">内容：体育</o-tabs-pane>
        <o-tabs-pane name="game">内容：游戏</o-tabs-pane>
        <o-tabs-pane name="book">内容：书籍</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
    禁用标签
    <o-tabs :selected="selectedTab">
      <o-tabs-head>
        <o-tabs-item name="sport">体育</o-tabs-item>
        <o-tabs-item name="game">游戏</o-tabs-item>
        <o-tabs-item name="book" disabled>书籍</o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="sport">内容：体育</o-tabs-pane>
        <o-tabs-pane name="game">内容：游戏</o-tabs-pane>
        <o-tabs-pane name="book">内容：书籍</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
    附加按钮
    <o-tabs :selected="selectedTab">
      <o-tabs-head>
        <o-tabs-item name="sport">体育</o-tabs-item>
        <o-tabs-item name="game">游戏</o-tabs-item>
        <o-tabs-item name="book">书籍</o-tabs-item>
        <template slot="actions">
          <o-button>设置</o-button>
        </template>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="sport">内容：体育</o-tabs-pane>
        <o-tabs-pane name="game">内容：游戏</o-tabs-pane>
        <o-tabs-pane name="book">内容：书籍</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: "sport"
    }
  }
}
</script>

<style>
.wrapper > .tabs {
  margin: 5px 0;
  border: 1px solid #ebedf0;
  border-radius: 4px;
}
</style>
```
## API参数
### Tabs
|     属性      | 说明           | 类型      |   默认值  |   可选值   |
| :------------: |:-------------: | :-------: | :--------: | :---------: |
| selected       | 必传值，给定初始选定的标签项    | String  |    -     |   -     |

### TabsItem
|     属性      | 说明           | 类型      |   默认值  |   可选值   |
| :------------: |:-------------: | :-------: | :--------: | :---------: |
| name       | 为每项标签传名字，方便标签与内容对应    | [String, Number]  |    -     |   -     |
| disabled       | 禁用该标签    | Boolean  |    -     |   -     |

### TabsPane
|     属性      | 说明           | 类型      |   默认值  |   可选值   |
| :------------: |:-------------: | :-------: | :--------: | :---------: |
| name       | 为每项内容传名字，方便标签与内容对应    | [String, Number]  |    -     |   -     |