<template>
  <div class="wrapper">
    默认标签
    <o-tabs :selected="selectedTab">
      <o-tabs-head>
        <o-tabs-item name="sport">体育</o-tabs-item>
        <o-tabs-item name="game">游戏</o-tabs-item>
        <o-tabs-item name="book">书籍</o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="sport">内容：体育</o-tabs-pane>
        <o-tabs-pane name="game">内容：游戏</o-tabs-pane>
        <o-tabs-pane name="book">内容：书籍</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
    禁用标签
    <o-tabs :selected="selectedTab">
      <o-tabs-head>
        <o-tabs-item name="sport">体育</o-tabs-item>
        <o-tabs-item name="game">游戏</o-tabs-item>
        <o-tabs-item name="book" disabled>书籍</o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="sport">内容：体育</o-tabs-pane>
        <o-tabs-pane name="game">内容：游戏</o-tabs-pane>
        <o-tabs-pane name="book">内容：书籍</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
    附加按钮
    <o-tabs :selected="selectedTab">
      <o-tabs-head>
        <o-tabs-item name="sport">体育</o-tabs-item>
        <o-tabs-item name="game">游戏</o-tabs-item>
        <o-tabs-item name="book">书籍</o-tabs-item>
        <template slot="actions">
          <o-button>设置</o-button>
        </template>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="sport">内容：体育</o-tabs-pane>
        <o-tabs-pane name="game">内容：游戏</o-tabs-pane>
        <o-tabs-pane name="book">内容：书籍</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
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
  import plugin from '@/plugin.js';
  import Tabs from '@/components/Tabs.vue';
  import TabsHead from '@/components/TabsHead.vue';
  import TabsBody from '@/components/TabsBody.vue';
  import TabsItem from '@/components/TabsItem.vue';
  import TabsPane from '@/components/TabsPane.vue';
  import Popover from '@/components/Popover.vue';
  import Collapse from '@/components/Collapse.vue';
  import CollapseItem from '@/components/CollapseItem.vue';
  import ButtonDemos from '../docs/.vuepress/components/buttonDemos.vue';

  Vue.use(plugin);

  @Component({
    components: {
      ButtonDemos,
      CollapseItem,
      Collapse,
      Popover,
      'o-tabs-pane':TabsPane,
      'o-tabs-body':TabsBody,
      'o-tabs-item':TabsItem,
      'o-tabs-head':TabsHead,
      'o-tabs':Tabs,
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
      'o-button':Button
    },
  })
  export default class App extends Vue {
    selectedTab = 'sport';
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
