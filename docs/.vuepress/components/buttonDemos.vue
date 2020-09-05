<template>
  <div>
    <o-button>按钮</o-button>
  </div>
</template>

<script>
  import Button from '../../../src/components/Button'

  export default {
    name:'buttonDemo',
    components: {
      'o-button': Button
    }
  }
</script>