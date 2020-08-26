<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Row extends Vue {
    @Prop() gutter?: string;
    @Prop({
      type: String,
      validator(value: string): boolean {
        return ['left', 'right', 'center'].includes(value);
      }
    }) align?: string;

    mounted() {
      console.log(this.$children);
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter;
      });
    }

    get rowClass() {
      const {align} = this;
      return [align && `align-${align}`];
    }

    get rowStyle() {
      if (this.gutter) {
        return {marginLeft: parseInt(this.gutter) / -2 + 'px', marginRight: parseInt(this.gutter) / -2 + 'px'};
      } else {
        return undefined;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;

    &.align-left {
      justify-content: flex-start;
    }

    &.align-right {
      justify-content: flex-end;
    }

    &.align-center {
      justify-content: center;
    }
  }
</style>