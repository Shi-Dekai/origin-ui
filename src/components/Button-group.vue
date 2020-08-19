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
    mounted(){
      for (const node of this.$el.children){
        const nodeName = node.nodeName.toLowerCase()
        if (nodeName !=='button'){
          console.warn(`Button-group的子元素应该全是 button，而你写的是: ${nodeName}`);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button-group {
    display: inline-flex;
    vertical-align: middle;
    margin-left: 5px;
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