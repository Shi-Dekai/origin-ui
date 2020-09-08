<template>
  <div>
    靠左
    <o-row align="left" class="rowDemo">
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="6" style="background: deepskyblue;">col-6</o-col>
      <o-col span="6" style="background: DodgerBlue;">col-6</o-col>
    </o-row>
    居中
    <o-row align="center" class="rowDemo">
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="6" style="background: deepskyblue;">col-6</o-col>
      <o-col span="6" style="background: DodgerBlue;">col-6</o-col>
    </o-row>
    靠右
    <o-row align="right" class="rowDemo">
      <o-col span="6" style="background: lightskyblue;">col-6</o-col>
      <o-col span="6" style="background: deepskyblue;">col-6</o-col>
      <o-col span="6" style="background: DodgerBlue;">col-6</o-col>
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
    background: #eee;
  }
</style>