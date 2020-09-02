<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Provide} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {
    @Prop({type: String, required: true}) selected!: string;
    @Prop({
      type: String,
      validator(value: string): boolean {
        return ['horizontal', 'vertical'].indexOf(value) >= 0;
      }
    }) direction?: string;
    @Provide() eventBus = new Vue();

    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'TabsHead') {
          vm.$children.forEach((vm2) => {
            if (vm2.$options.name === 'TabsItem' && vm2.$props.name === this.selected) {
              console.log(vm2.$el);
              this.eventBus.$emit('update:selected', this.selected, vm2);
            }
          });
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>