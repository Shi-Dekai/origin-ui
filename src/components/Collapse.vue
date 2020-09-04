<template>
  <div class="collapse">
    <slot :single="single"></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Provide} from 'vue-property-decorator';

  @Component
  export default class Collapse extends Vue {
    @Prop({type: Boolean, default: false}) single!: boolean;
    @Provide() eventBus = new Vue();
    @Prop(String) selected?: string;

    mounted() {
      this.eventBus.$emit('update:selected', this.selected);
      this.eventBus.$on('update:selected', (name: string) => {
        this.$emit('update:selected', name);
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