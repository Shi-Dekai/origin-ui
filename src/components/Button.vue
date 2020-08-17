<template>
  <div>
    <button class="g-button">按钮</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
  .g-button{
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #999;
    background: white;
    &:hover{
      border-color: #666;
    }
    &:active{
      background-color: #eee;
    }
    &:focus{
      outline: none;
    }
  }
</style>