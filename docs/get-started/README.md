---
title: 快速上手
---

# 快速上手

## 样式引入
```javascript
import "origin-ui/dist/index.css"
```

## 组件注册

在组件中引入

```vue
<script>
    import {Button} from "origin-ui"
    export default {
      components: {"o-button":Button}
    }
</script>
```

## 使用
```vue
<template>
  <div>
    <o-button>按钮</o-button>
  </div>
</template>
```