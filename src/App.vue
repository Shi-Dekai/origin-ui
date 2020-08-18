<template>
  <div id="app">
    <Button :loading="loading1"
            @click="loading1 = !loading1">
      按钮
    </Button>
    <Button :loading="loading2" icon="setting"
            @click="loading2 = !loading2">
      按钮
    </Button>
    <Button :loading="loading3" icon="setting" icon-position="right"
            @click="loading3 = !loading3">
      按钮
    </Button>
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
  export default class App extends Vue {
    loading1 = false;
    loading2 = true;
    loading3 = false;
  }
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
