<template>
  <div id="app">
    <Button>按钮</Button>
    <Button icon="setting">按钮</Button>
    <Button icon="setting" icon-position="right">按钮</Button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icon.vue';

  @Component({
    components: {
      Icon,
      Button
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  #app {
    margin: 20px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 14px;
  }
</style>
