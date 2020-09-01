<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class TabsItem extends Vue {
    @Prop(Boolean) disabled = false;

  }
</script>

<style lang="scss" scoped>
  .tabs-item {

  }
</style>