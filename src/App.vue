<template>
  <div id="app">
    <div>
      {{1111}}
      <div class="position">
        <div>弹出方向</div>
        <Button @click="top">上方提示</Button>
        <Button @click="middle">中间提示</Button>
        <Button @click="bottom">下方提示</Button>
      </div>
      <div class="custom">
        <div>自定义弹窗</div>
        <Button @click="always">一直显示</Button>
        <Button @click="oneSecond">1秒自动关闭</Button>
        <Button @click="closeText">知道了</Button>
        <Button @click="enableHTML">支持HTML语法</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Toast from '@/components/Toast.vue';
  import plugin from '@/plugin.js';

  Vue.use(plugin);

  @Component({
    components: {
      Toast,
      Button
    },
  })
  export default class App extends Vue {
    top() {
      this.$toast('上方提示');
    }

    middle() {
      this.$toast('中间提示', {position: 'middle'});
    }

    bottom() {
      this.$toast('下方提示', {position: 'bottom'});
    }

    always() {
      this.$toast('一直显示', {position: 'middle', autoClose: false});
    }

    oneSecond() {
      this.$toast('1秒自动关闭', {autoClose: 1});
    }

    closeText() {
      this.$toast('这是一段内容', {closeButton: {text: '知道了'}});
    }

    enableHTML() {
      this.$toast('<strong>这是一段加粗的文字</strong>', {enableHtml: true});
    }
  }
</script>

<style lang="scss">
  #app {
    .sider {
      background: #333;
      width: 200px;
    }

    .header {
      background: #999;
      height: 100px;
    }

    .footer {
      background: #ccc;
      height: 50px;
    }
  }

  .box {
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
