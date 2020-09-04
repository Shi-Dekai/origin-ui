<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class CollapseItem extends Vue {
    open = false;
    @Prop({type: String, required: true}) title!: string;
    @Prop(String) name?: string;
    @Inject() eventBus!: Vue;

    mounted() {
      this.eventBus.$on('update:selected', (name: string) => {
        if (this.name !== name) {
          this.close();
        } else {
          this.show();
        }
      });
    }

    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        this.eventBus.$emit('update:selected', this.name);
      }
    }

    close() {
      this.open = false;
    }

    show() {
      this.open = true;
    }
  }
</script>

<style lang="scss" scoped>
  .collapse-item {
    > .title {
      border: 1px solid #ddd;
      margin: -1px -1px 0 -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }

    &:first-child {
      > .title {
        border-radius: 4px 4px 0 0;
      }
    }

    &:last-child {
      > .title:last-child {
        border-radius: 0 0 4px 4px;
      }
    }

    &:last-child {
      > .content:last-child {
        border-bottom: 1px solid #ddd;
        border-radius: 0 0 4px 4px;
      }
    }

    > .content {
      padding: 8px;
    }
  }
</style>