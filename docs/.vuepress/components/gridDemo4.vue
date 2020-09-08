<template>
  <div>
    <o-row class="rowDemo">
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="6" style="background: deepskyblue;">col-6</o-col>
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="5" offset="1" style="background: deepskyblue;">
        col-5 offset-1
      </o-col>
    </o-row>
    <o-row class="rowDemo">
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="6" style="background: deepskyblue;">col-6</o-col>
      <o-col span="4" offset="2" style="background: lightskyblue;">col-4 offset-2</o-col>
      <o-col span="5" offset="1" style="background: deepskyblue;">col-5 offset-1</o-col>
    </o-row>
  </div>
</template>

<script>
  import Row from '../../../src/components/Row'
  import Col from '../../../src/components/Col'

  export default {
    components: {'o-row': Row, 'o-col': Col}
  }
</script>

<style scoped>
  .rowDemo{
    margin-top: 10px;
  }
</style>