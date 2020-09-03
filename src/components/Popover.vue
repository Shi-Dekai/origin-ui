<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Popover extends Vue {
    visible = false;

    xxx() {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          const eventHandler = () => {
            this.visible = false;
            console.log('隐藏弹出框');
            document.removeEventListener('click', eventHandler);
            console.log('删除监听事件');
          };
          console.log('添加监听事件');
          document.addEventListener('click', eventHandler);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    > .content-wrapper {
      border: 1px solid red;
      position: absolute;
      bottom: 100%;
      left: 0;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
  }
</style>