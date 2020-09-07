<template>
  <div id="app">
    <div style="padding: 100px">
      <Collapse :selected.sync="selectedTab" >
        <CollapseItem title="标题1" name="1">内容1</CollapseItem>
        <CollapseItem title="标题2" name="2">内容2</CollapseItem>
        <CollapseItem title="标题3" name="3">内容3</CollapseItem>
      </Collapse>
    </div>
    <buttonDemos></buttonDemos>
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
      TabsPane,
      TabsBody,
      TabsItem,
      TabsHead,
      Tabs,
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
    selectedTab = ['1','2'];
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
