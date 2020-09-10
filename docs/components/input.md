---
title: input-输入框
---

# input-输入框
通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 组件注册
```vue
<script>
    import {Input} from "origin-ui"
    export default {
      components: {"o-input":Input}
    }
</script>
```

## 基本使用
效果：
<ClientOnly>
<inputDemos></inputDemos>
</ClientOnly>

代码：

```vue
<template>
  <div>
    <o-input value="默认输入框"></o-input>
    <o-input value="禁用" disabled></o-input>
    <o-input value="只读" read-only></o-input>
    <o-input value="错误提示" error="请输入正确信息"></o-input>
    <div>
      <div>双向绑定</div>
      <o-input v-model="value1" placeholder="支持v-model"></o-input>
      <span>value1:{{ value1 }}</span>
    </div>
    <div>
      <div>change事件</div>
      <o-input :value="value2" @change="change" placeholder="支持change事件"></o-input>
      <span>value2:{{ value2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: ""
    }
  },
  methods: {
    change(event) {
      this.value2 = event
    }
  }
}
</script>
```
## API参数
|     属性      | 说明           | 类型      |   默认值  |   可选值   |
| :------------: |:-------------: | :-------: | :--------: | :---------: |
| value        | 给输入框绑定值    | String  |    -     |     -      |
| disabled     | 设置输入框禁用   | Boolean |   false  |     false; true      |
| readOnly     | 设置输入框只读   | Boolean |   false  |     false; true      |
| error     | 设置错误警告   | 	String |   -  |    -     |
| v-model     | 输入框支持v-model语法   | -    |   -  |     -      |