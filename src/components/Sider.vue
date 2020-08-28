<template>
  <transition name="fade">
    <div class="sider" v-if="visible" id="siderRef">
      <slot></slot>
      <button @click="visible = false">取消</button>
    </div>
  </transition>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Sider extends Vue {
    visible = true;
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .2s;
  }

  .fade-enter, .fade-leave-to {
    margin-left: -200px;
  }
</style>