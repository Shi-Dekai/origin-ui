<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
      <svg class="icon" v-if="icon">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <span class=content>
        <slot></slot>
      </span>
    </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {
    @Prop(String) icon?: string;
    @Prop(String) iconPosition?: string;

  }
</script>

<style lang="scss" scoped>
  .g-button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #999;
    background: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {border-color: #666;}
    &:active {background-color: #eee;}
    &:focus {outline: none;}

    > .icon {
      width: 1em;
      height: 1em;
    }

    > .content {order: 2;}
    > .icon{order: 1; margin-right: .3em;}

    &.icon-right{
      > .content {order: 1;}
      > .icon{order: 2; margin-right:0; margin-left: .3em;}
    }
  }
</style>