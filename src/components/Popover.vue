<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    visible = false;

    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      const {left, top} = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
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
    transform: translateY(-100%);
    margin-top: -10px;
    border: 1px solid #333;
    border-radius: 4px;
    padding: .5em 1em;
    max-width: 20em;
    flex-wrap: wrap;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
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
</style>