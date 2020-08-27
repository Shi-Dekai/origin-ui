<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {
    layoutClass = {
      hasSider: false
    };

    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'Sider') {
          this.layoutClass.hasSider = true;
        }
      });
    }

  }
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    border: 1px solid red;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>