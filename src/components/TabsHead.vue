<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';

  @Component
  export default class TabsHead extends Vue {
    @Inject() eventBus!: Vue;

    mounted() {
      this.eventBus.$on('update:selected', (item: string, vm: Vue) => {
        const index = [...vm.$el.parentNode.querySelectorAll('.tabs-item')].indexOf(vm.$el);

        Object.assign(this.$refs.line.style, {
          width: vm.$el.offsetWidth + 'px',
          left: index * vm.$el.offsetWidth + 'px',
          top: vm.$el.offsetHeight - 1 + 'px'
        });
      });
    }

  }
</script>

<style lang="scss" scoped>
  .tabs-head {
    display: flex;
    height: 40px;
    justify-content: start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #666;

    > .line {
      position: absolute;
      height: 2px;
      background: blue;
      transition: all 300ms;
      z-index: 99;
    }

    > .actions-wrapper {
      margin-left: auto;
      margin-right: 1em;
    }
  }
</style>