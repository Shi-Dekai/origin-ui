<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class TabsItem extends Vue {
    active = false;
    @Prop(Boolean) disabled = false;
    @Prop({type: String || Number, required: true}) name!: string | number;
    @Inject() eventBus!: Vue;

    mounted() {
      this.eventBus.$on('update:selected', (name: string) => {
        this.active = this.name === name;
      });
    }

    get classes() {
      return {active: this.active};
    }

    xxx() {
      this.eventBus.$emit('update:selected', this.name);
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    &.active{
      background: red;
    }
  }
</style>