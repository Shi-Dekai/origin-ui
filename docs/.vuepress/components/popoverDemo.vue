<template>
  <div>
    <div class="click">
      <div>点击弹出</div>
      <o-popover position="top">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>上方弹出</o-button>
      </o-popover>
      <o-popover position="bottom">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>下方弹出</o-button>
      </o-popover>
      <o-popover position="left">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>左边弹出</o-button>
      </o-popover>
      <o-popover position="right">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>右边弹出</o-button>
      </o-popover>
    </div>
    <div class="hover">
      <div>鼠标悬浮</div>
      <o-popover position="top" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>上方弹出</o-button>
      </o-popover>
      <o-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>下方弹出</o-button>
      </o-popover>
      <o-popover position="left" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>左边弹出</o-button>
      </o-popover>
      <o-popover position="right" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <o-button>右边弹出</o-button>
      </o-popover>
    </div>
  </div>
</template>

<script>
  import Popover from '../../../src/components/Popover'
  import Button from '../../../src/components/Button'

  export default {
    components: {
      'o-popover': Popover,
      'o-button': Button
    }
  }
</script>