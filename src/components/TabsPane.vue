<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class TabsPane extends Vue {
    active = false;
    @Inject() eventBus!: Vue;
    @Prop({type: String, required: true}) name!: string;

    mounted() {
      this.eventBus.$on('update:selected', (name: string) => {
        this.active = this.name === name;
      });
    }

    get classes() {
      return {active: this.active};
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane {
    &.active {
    }
  }
</style>