<template>
  <div class="col" :class="[ span && `col-${span}`, offset && `offset-${offset}` ]"
       :style="{paddingLeft: gutter / 2+'px', paddingRight: gutter / 2+'px'}">
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Col extends Vue {
    @Prop(String) readonly span?: string | number;
    @Prop(String) readonly offset?: string | number;
    gutter = 0
  }
</script>

<style lang="scss" scoped>
  .col {
    width: 50%;
    height: 100px;

    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    @for $n from 1 through 24 {
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>