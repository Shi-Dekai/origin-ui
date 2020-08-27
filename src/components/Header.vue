<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {

  }
</script>

<style lang="scss" scoped>
  .header{
  }
</style>