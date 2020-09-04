<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Provide} from 'vue-property-decorator';

  @Component
  export default class Collapse extends Vue {
    @Provide() eventBus = new Vue();
    @Prop(Array) selected!: string[];
    @Prop({type: Boolean, default: false}) single!: boolean;

    mounted() {
      this.eventBus.$emit('update:selected', this.selected);
      this.eventBus.$on('update:addSelected', (name: string) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        if (this.single) {
          selectedCopy = [name];
        } else {
          selectedCopy.push(name);
        }
        this.selected.push(name);
        this.eventBus.$emit('update:selected', selectedCopy);
        this.$emit('update:selected', selectedCopy);
      });
      this.eventBus.$on('update:removeSelected', (name: string) => {
        const selectedCopy = JSON.parse(JSON.stringify(this.selected));
        const index = selectedCopy.indexOf(name);
        selectedCopy.splice(index, 1);
        console.log('-1');
        this.eventBus.$emit('update:selected', selectedCopy);
        this.$emit('update:selected', selectedCopy);
      });
    }
  }
</script>

<style lang="scss" scoped>
  .collapse {
    border: 1px solid #ddd;
    border-radius: 4px;
    border-bottom: none;
  }
</style>