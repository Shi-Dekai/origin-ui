<template>
  <div id="app">
    <Layout style="min-height: 100vh">
      <Sider class="demo">sider</Sider>
      <Layout>
        <Header class="demo">header</Header>
        <Content class="demo">content</Content>
        <Footer class="demo">footer</Footer>
      </Layout>
    </Layout>

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

  @Component({
    components: {
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
    inputValue = '带';
    loading1 = false;
    loading2 = true;
    loading3 = false;

    inputChange(e: InputEvent) {
      console.log((e.target as HTMLInputElement).value);
    }
  }
</script>

<style lang="scss">
  #app {
    .demo{
      border: 1px solid #666;
      min-height: 100px;
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
