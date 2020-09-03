<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span class="triggerWrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Popover extends Vue {
    visible = true;

    xxx() {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);

          const {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect();
          console.log(width, height, left, top);
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
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
  }

  .content-wrapper {
    position: absolute;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
  }
</style>