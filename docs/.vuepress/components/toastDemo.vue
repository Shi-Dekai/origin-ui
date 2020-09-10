<template>
  <div>
    <div class="position">
      <div>弹出方向</div>
      <o-button @click="top">上方提示</o-button>
      <o-button @click="middle">中间提示</o-button>
      <o-button @click="bottom">下方提示</o-button>
    </div>
    <div class="custom">
      <div>自定义弹窗</div>
      <o-button @click="always">一直显示</o-button>
      <o-button @click="oneSecond">1秒自动关闭</o-button>
      <o-button @click="closeText">知道了</o-button>
      <o-button @click="enableHTML">支持HTML语法</o-button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Toast from '../../../src/components/Toast';
  import Button from '../../../src/components/Button';
  import plugin from '../../../src/plugin.js';

  Vue.use(plugin);

  @Component({
    components: {
      'o-button': Button,
      Toast
    }
  })
  export default class toastDemo extends Vue {
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
