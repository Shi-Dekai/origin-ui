<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';

  @Component
  export default class TabsBody extends Vue {
    @Inject() eventBus!: Vue;

  }
</script>

<style lang="scss" scoped>
  .tabs-body {

  }
</style>