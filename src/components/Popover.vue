<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
         :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span class="triggerWrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Popover extends Vue {
    visible = false;
    @Prop({
      type: String,
      default: 'top',
      validator(value: string): boolean {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
      }
    }) position!: string;

    @Prop({
      type: String,
      default: 'click',
      validator(value: string): boolean {
        return ['click', 'hover'].indexOf(value) >= 0;
      }
    }) trigger!: string;

    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick);
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open);
        this.$refs.popover.addEventListener('mouseleave', this.close);
      }
    }

    $destroy() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick);
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open);
        this.$refs.popover.removeEventListener('mouseleave', this.close);
      }
    }

    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs;
      document.body.appendChild(contentWrapper);
      const {left, top, height, width} = triggerWrapper.getBoundingClientRect();
      const {height: height2} = contentWrapper.getBoundingClientRect();

      const positions = {
        top: {left: left + window.scrollX, top: top + window.scrollY},
        bottom: {left: left + window.scrollX, top: top + height + window.scrollY},
        left: {left: left + window.scrollX, top: top + window.scrollY + (height - height2) / 2},
        right: {left: left + width + window.scrollX, top: top + window.scrollY + (height - height2) / 2},
      };

      contentWrapper.style.left = positions[this.position].left + 'px';
      contentWrapper.style.top = positions[this.position].top + 'px';
    }

    onClickDocument(e: object) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {return;}
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) {return;}
      this.close();
    }

    open() {
      this.visible = true;
      setTimeout(() => {
        this.positionContent();
        document.addEventListener('click', this.onClickDocument);
      }, 0);
    }

    close() {
      this.visible = false;
      document.removeEventListener('click', this.onClickDocument);
    }

    onClick(event: object) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    > .triggerWrapper {
      display: inline-block;
    }
  }

  .content-wrapper {
    position: absolute;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, .5));
    background: white;
    border: 1px solid #333;
    border-radius: 4px;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before, &::after {
        left: 10%;
      }

      &::before {
        border-top-color: black;
        top: 100%;
      }

      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::before, &::after {
      }

      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }

      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before, &::after {
        transform: translateY(-50%);
        left: 100%;
        top: 50%;
      }

      &::before {
        border-left-color: black;
        left: 100%;
      }

      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }

    &.position-right {
      margin-left: 10px;

      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        border-right-color: black;
        right: 100%;
      }

      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }

  }
</style>