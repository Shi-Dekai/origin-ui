<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TabsPane extends Vue {

  }
</script>

<style lang="scss" scoped>
  .tabs-pane {

  }
</style>