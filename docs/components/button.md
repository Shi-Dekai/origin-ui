---
title: button-按钮
---
# 按钮
xxx
## 组件注册
```vue
<script>
    import {Button} from "origin-ui"
    export default {
      components: {"o-button":Button}
    }
</script>
```
## 基本使用
效果： 

<buttonDemos></buttonDemos>

代码：

```vue
<template>
  <div>
    <o-button>默认按钮</o-button>
    <o-button icon="setting">带有icon按钮</o-button>
    <o-button icon="setting" icon-position="right">icon在右边</o-button>
    <o-button loading>加载中</o-button>
    <o-button icon="setting" :loading="loading1" @click="onClick">点击加载</o-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loading1:false
    }
  },
  methods: {
    onClick(){
      this.loading1 = !this.loading1
    }
  }
}
</script>
```
## 按钮组合：ButtonGroup
### 组件注册

```vue
<script>
    import {Button,ButtonGroup} from "origin-ui"
    export default {
      components: {"o-button":Button,"o-button-group":ButtonGroup}
    }
</script>
```

### 基本使用
效果：

<buttonGroupDemos></buttonGroupDemos>  

代码：

```vue
<template>
    <div>
      <o-button-group>
        <o-button icon="left">上一页</o-button>
        <o-button>按钮</o-button>
        <o-button icon="right" icon-position="right">下一页</o-button>
      </o-button-group>
    </div>
</template>
```

## API参数
|     属性      | 说明           | 类型      |   默认值  |   可选值   |
| ------------ |:-------------: | -------: | --------: | --------- |
| icon         | 给按钮添加图标    | String  |    -     |           |
| iconPosition | 改变图标位置      | String  |   left	  |     [left,right]      |
| loading      | 给按钮添加加载动画 | Boolean |   false  |     [false,true]      |