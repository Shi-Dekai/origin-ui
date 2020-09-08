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

<script>
  import Tabs from '../../../src/components/Tabs'
  import TabsHead from '../../../src/components/TabsHead'
  import TabsBody from '../../../src/components/TabsBody'
  import TabsItem from '../../../src/components/TabsItem'
  import TabsPane from '../../../src/components/TabsPane'
  import Button from '../../../src/components/Button'

  export default {
    data() {
      return {
        selectedTab: 'sport'
      }
    },
    components: {
      'o-tabs': Tabs,
      'o-tabs-head': TabsHead,
      'o-tabs-body': TabsBody,
      'o-tabs-item': TabsItem,
      'o-tabs-pane': TabsPane,
      'o-button': Button
    }
  }
</script>

<style>
  .wrapper > .tabs {
    margin: 5px 0;
    border: 1px solid #ebedf0;
    border-radius: 4px;
  }
</style>