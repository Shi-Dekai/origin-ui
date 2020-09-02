<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';

  @Component
  export default class TabsHeader extends Vue {
    @Inject() eventBus!: Vue;


  }
</script>

<style lang="scss" scoped>
  .tabs-head {
    border: 1px solid red;
    display: flex;
    height: 40px;
    justify-content: start;
    align-items: center;

    > .actions-wrapper {
      margin-left: auto;
      margin-right: 1em;
    }
  }
</style>