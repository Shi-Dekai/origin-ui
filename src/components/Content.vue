<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Content extends Vue {

  }
</script>

<style lang="scss" scoped>
  .content{
    flex-grow: 1;
  }
</style>