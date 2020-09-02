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
        const {width, height, left, top} = vm.$el.getBoundingClientRect();
        console.log(width, height, left, top);
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.height = `${height}px`;
        this.$refs.line.style.left = `${left}px`;
        this.$refs.line.style.top = `${top}px`;
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

    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid blue;
      transition: all 300ms;
    }

    > .actions-wrapper {
      margin-left: auto;
      margin-right: 1em;
    }
  }
</style>