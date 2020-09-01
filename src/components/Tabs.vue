<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {
    @Prop({type: String}) selected?: string;

    @Prop({
      type: String,
      validator(value: string): boolean {
        return ['horizontal', 'vertical'].indexOf(value) >= 0;
      }
    }) direction?: string;

    created() {
      // this.$emit('update:selected', 'xxx');
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>