<template>
  <div id="app">
    <Button/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  #app{
    margin: 20px;
  }

  *{box-sizing: border-box; margin: 0; padding:0;}
  body{
    font-size: 14px;
  }
</style>
