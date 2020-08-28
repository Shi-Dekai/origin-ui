<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {


  }
</script>

<style lang="scss" scoped>
  .toast {
    font-size: 14px;
    line-height: 40px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, .75);
    color: white;
    border-radius: 4px;
    box-shadow:0 0 3px 0 rgba(0, 0, 0, .5);
    padding: 0 16px;
  }
</style>