<template>
  <div>
    <o-button>默认样式</o-button>
    <o-button icon="setting">默认样式</o-button>
    <o-button :loading="true">设置</o-button>
    <o-button disabled>设置</o-button>

    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
  import Button from '../../../src/components/Button'

  export default {
    name: 'buttonDemos',
    components: {
      'o-button': Button
    },
    data() {
      return {
        content: `
          <o-button>默认样式</o-button>
          <o-button icon="setting">默认样式</o-button>
          <o-button :loading="true">设置</o-button>
          <o-button disabled>设置</o-button>
        `
      }
    }
  }
</script>