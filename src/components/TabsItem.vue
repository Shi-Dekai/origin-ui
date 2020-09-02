<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class TabsItem extends Vue {
    active = false;
    @Prop({type: Boolean}) disabled!: boolean;
    @Prop({type: String || Number, required: true}) name!: string | number;
    @Inject() eventBus!: Vue;

    mounted() {
      this.eventBus.$on('update:selected', (name: string) => {
        this.active = this.name === name;
      });
    }

    get classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }

    onClick() {
      if (this.disabled) {return;}
      this.eventBus.$emit('update:selected', this.name, this);
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active {
      color: blue;
      font-weight: bold;
    }

    &.disabled {
      color: grey;
      cursor: not-allowed;
    }
  }
</style>