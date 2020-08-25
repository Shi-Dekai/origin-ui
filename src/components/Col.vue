<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Col extends Vue {
    @Prop(String) readonly span?: string | number;
  }
</script>

<style lang="scss" scoped>
  .col {
    width: 50%;
    height: 100px;
    background: grey;
    border: 1px solid red;

    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>