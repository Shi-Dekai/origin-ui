<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Collapse extends Vue {

  }
</script>

<style lang="scss" scoped>
  .collapse {
    border: 1px solid #ddd;
    border-radius: 4px;
    border-bottom: none;
  }
</style>