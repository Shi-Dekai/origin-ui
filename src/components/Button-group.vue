<template>
  <div class="o-button-group">
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
  .o-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .o-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
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