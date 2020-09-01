<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TabsHeader extends Vue {

  }
</script>

<style lang="scss" scoped>
  .tabs-head {

  }
</style>