<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import '../assets/Svg.js'

  @Component
  export default class Icon extends Vue {
    @Prop(String) name?: string;
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
  }
</style>