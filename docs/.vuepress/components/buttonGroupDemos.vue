<template>
  <div>
    <o-button-group>
      <o-button icon="left">上一页</o-button>
      <o-button>按钮</o-button>
      <o-button icon="right" icon-position="right">下一页</o-button>
    </o-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/components/Button'
  import ButtonGroup from '../../../src/components/Button-group'

  export default {
    name: 'ButtonGroupDemos',
    components: {
      'o-button': Button,
      'o-button-group': ButtonGroup
    }
  }
</script>