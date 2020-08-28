<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type closeButton = {
    text: string;
    callBack: (toast: Toast) => void;
  }
  @Component
  export default class Toast extends Vue {
    @Prop(Boolean) autoClose = true;
    @Prop(Number) autoCloseDelay = 500;

    @Prop({
      default: () => {
        return {
          text: '关闭',
          callBack: (toast: Toast) => {
            toast.close();
          }
        };
      }
    }) closeButton!: closeButton;


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
      this.closeButton.callBack(Toast);
    }
  }
</script>

<style lang="scss" scoped>
  .toast {
    font-size: 14px;
    height: 40px;
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
    padding: 0 16px;

    .line {
      border-left: 1px solid #666;
      height: 100%;
      margin-left: 16px;
    }

    .close {
      padding-left: 16px;
    }
  }
</style>