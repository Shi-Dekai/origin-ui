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
    <ButtonGroup>
      <Button icon="left">
        上一页
      </Button>
      <Button>
        更多
      </Button>
      <Button icon="right" icon-position="right">
        下一页
      </Button>
    </ButtonGroup>
    <div id="test"></div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icon.vue';
  import ButtonGroup from '@/components/Button-group.vue';

  @Component({
    components: {
      ButtonGroup,
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
