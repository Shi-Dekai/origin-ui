<template>
  <div id="app">
    <button @click="showToast">弹出信息</button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icon.vue';
  import ButtonGroup from '@/components/Button-group.vue';
  import Input from '@/components/Input.vue';
  import Row from '@/components/Row.vue';
  import Col from '@/components/Col.vue';
  import Layout from '@/components/Layout.vue';
  import Header from '@/components/Header.vue';
  import Content from '@/components/Content.vue';
  import Footer from '@/components/Footer.vue';
  import Sider from '@/components/Sider.vue';
  import Toast from '@/components/Toast.vue';
  import plugin from '@/plugin';

  Vue.use(plugin);

  @Component({
    components: {
      Toast,
      Sider,
      Footer,
      Content,
      Header,
      Layout,
      Col,
      Row,
      Input,
      ButtonGroup,
      Icon,
      Button
    },
  })
  export default class App extends Vue {
    showToast(){
      Vue.prototype.$toast('我是 message');
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
