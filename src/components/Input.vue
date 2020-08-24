<template>
  <label class="wrapper" :class="{error}">
    <input :value="value" :disabled="disabled" :readonly="readonly" type="text">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  @Component({
    components: {Icon}
  })
  export default class Input extends Vue {
    @Prop(String) value?: string;
    @Prop({default: false}) disabled?: boolean;
    @Prop({default: false}) readonly?: boolean;
    @Prop(String) error?: string;
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    font-size: 12px;display: inline-flex;align-items: center;
    > *{margin-right: .5em;}
    > input {height: 32px;border: 1px solid #999;border-radius: 4px;padding: 0 8px;font-size: inherit;
      &:hover {border-color: #666666;}
      &:focus {box-shadow: inset 0 1px 3px rgba(0, 0, 0, .5);outline: none;}
      &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed;} }
    &.error{ >input{border-color: #F1453D;}
      >.icon-error{fill: #F1453D;}
      >.errorMessage{color: red;}
    }
  }
</style>