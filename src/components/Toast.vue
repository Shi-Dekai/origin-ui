<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <div class="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
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
      this.$emit('close');
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
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.position-top {
      top: 0;

      > .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down .4s;
      }
    }

    &.position-bottom {
      bottom: 0;

      > .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up .4s;
      }
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
      animation: fade-in .4s;
    }
  }

  .toast {
    font-size: 14px;
    min-height: 40px;
    line-height: 1.8;
    display: flex;
    align-items: center;
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


  }
</style>