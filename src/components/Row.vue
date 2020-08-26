<template>
  <div class="row" :style="{marginLeft: -gutter / 2+'px',marginRight: -gutter / 2+'px'}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Row extends Vue {
    @Prop() gutter?: number | string;

    mounted() {
      console.log(this.$children);
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter;
      });
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>