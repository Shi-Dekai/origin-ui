<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type closeButton = {
    text: string;
    callBack?: () => void;
  }
  @Component
  export default class Toast extends Vue {
    @Prop(Boolean) autoClose = true;
    @Prop(Number) autoCloseDelay = 500;
    @Prop({
      default: () => {
        return {
          text: '关闭',
          callBack: undefined
        };
      }
    }) closeButton?: closeButton;
    @Prop(Boolean) enableHtml?: boolean;

    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    }

    close() {
      this.$el.remove();
      this.$destroy();
    }

    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callBack === 'function') {
        console.log('执行了closeButton.callBack');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toast {
    font-size: 14px;
    min-height: 40px;
    line-height: 1.8;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, .75);
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    padding: 8px 16px;

    .line {
      border-left: 1px solid #666;
      height: 100%;
      margin-left: 16px;
      position: absolute;
      right: 70px;
    }

    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
  }
</style>