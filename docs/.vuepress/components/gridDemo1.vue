<template>
  <div class="normal">
    <o-row class="rowDemo">
      <o-col span="12" style="background: lightskyblue;">col-12</o-col>
      <o-col span="12" style="background: deepskyblue;">col-12</o-col>
    </o-row >
    <o-row class="rowDemo">
      <o-col span="8" style="background: lightskyblue;">col-8</o-col>
      <o-col span="8" style="background: deepskyblue;">col-8</o-col>
      <o-col span="8" style="background: lightskyblue;">col-8</o-col>
    </o-row>
    <o-row class="rowDemo">
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="6" style="background: deepskyblue;">col-6</o-col>
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="6" style="background: deepskyblue;">col-6</o-col>
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

<style>
  .rowDemo{
    margin-top: 10px;
  }
</style>