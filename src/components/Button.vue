<template>
    <button class="button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
      <Icon class="icon" v-if="icon && !loading" :name="icon"/>
      <Icon class="loading icon" v-if="loading" name="loading"/>
      <span class=content>
        <slot></slot>
      </span>
    </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  @Component({
    components: {Icon}
  })
  export default class Button extends Vue {
    @Prop(String) icon?: string;
    @Prop({type:String,default:'left',
      validator(value: string): boolean {return value === 'left' || value === 'right';}})
    iconPosition?: string;
    @Prop({type:Boolean,default:false}) loading?: boolean;
  }
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
  .loading{
    animation: spin 2s infinite linear;
  }
  .button {
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
    margin-left: 5px;

    &:hover {border-color: #666;}
    &:active {background-color: #eee;}
    &:focus {outline: none;}

    > .content {order: 2;}
    > .icon{order: 1; margin-right: .3em;}

    &.icon-right{
      > .content {order: 1;}
      > .icon{order: 2; margin-right:0; margin-left: .3em;}
    }
  }
</style>