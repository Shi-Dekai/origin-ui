<template>
  <div class="col" :class="colClass"
       :style="colStyle">
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
    gutter = 0;

    get colClass() {
      const {span, offset} = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ];
    }

    get colStyle() {
      const {gutter} = this;
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      };
    }
  }
</script>

<style lang="scss" scoped>
  .col {
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