<template>
  <div class="toast" :class="toastClasses">
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
    @Prop({type: Boolean, default: true}) autoClose?: boolean;
    @Prop({type: Number, default: 2}) autoCloseDelay!: number;
    @Prop(Boolean) enableHtml?: boolean;

    @Prop({
      default: () => {
        return {
          text: '关闭',
          callBack: undefined
        };
      }
    }) closeButton?: closeButton;

    @Prop({
      type: String, default: 'top', validator(value: string): boolean {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
      }
    }) position?: string;

    get toastClasses() {
      return {[`position-${this.position}`]: true};
    }

    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    }

    close() {
      this.$el.remove();
      this.$emit('close')
      this.$destroy();
    }

    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callBack === 'function') {
        this.closeButton.callBack();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes fade-in {
    0%{opacity: 0}
    100%{opacity: 1}
  }

  .toast {
    animation: fade-in 1s;
    font-size: 14px;
    min-height: 40px;
    line-height: 1.8;
    display: flex;
    align-items: center;
    position: fixed;
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
      position: absolute;
      right: 73px;
    }

    .close {
      padding-left: 16px;
      margin-left: 16px;
      flex-shrink: 0;
    }

    &.position-top {
      top: 0;
    }

    &.position-bottom {
      bottom: 0;
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>