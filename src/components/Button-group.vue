<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class ButtonGroup extends Vue {

  }
</script>

<style lang="scss" scoped>
  .button-group {
    display: inline-flex;
    vertical-align: middle;
    > .button{
      border-radius: 0;
      margin-left: -1px;
      &:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover{
        position: relative;z-index: 1;
      }
    }
  }
</style>