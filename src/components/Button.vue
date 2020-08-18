<template>
    <button class="button" :class="{[`icon-${iconPosition}`]:true}">
      <Icon class="icon" v-if="icon" :name="icon"/>
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

  }
</script>

<style lang="scss" scoped>
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