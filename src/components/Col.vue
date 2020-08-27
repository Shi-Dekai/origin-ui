<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type Phone = {
    span: number;
  }

  const validator = (value: object): boolean => {
    const keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false;
      }
    });
    return valid;
  };
  @Component
  export default class Col extends Vue {
    @Prop(String) readonly span?: string | number;
    @Prop(String) readonly offset?: string | number;
    @Prop({type: Object, validator}) ipad?: Phone;
    @Prop({type: Object, validator}) narrowPc?: Phone;
    @Prop({type: Object, validator}) pc?: Phone;
    @Prop({type: Object, validator}) widePc?: Phone;
    gutter = 0;

    get colClass() {
      const {span, offset, ipad, narrowPc, pc, widePc} = this;
      const phoneClass: string[] = [];
      if (ipad) {phoneClass.push(`col-ipad-${ipad.span}`);}
      if (narrowPc) {phoneClass.push(`col-narrowPc-${narrowPc.span}`);}
      if (pc) {phoneClass.push(`col-pc-${pc.span}`);}
      if (widePc) {phoneClass.push(`col-widePc-${widePc.span}`);}
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...phoneClass
      ];
    }

    get colStyle() {
      const {gutter} = this;
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      };
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;

    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) {
      @for $n from 1 through 24 {
        &.col-ipad-#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      @for $n from 1 through 24 {
        &.offset-ipad-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) {
      @for $n from 1 through 24 {
        &.col-narrowPc-#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      @for $n from 1 through 24 {
        &.offset-narrowPc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      @for $n from 1 through 24 {
        &.col-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      @for $n from 1 through 24 {
        &.offset-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      @for $n from 1 through 24 {
        &.col-wide-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      @for $n from 1 through 24 {
        &.offset-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>