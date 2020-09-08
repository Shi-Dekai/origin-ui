<template>
  <div>
    <o-row gutter="20">
      <o-col span="6">
        <div style="background: lightskyblue;" class="col">col-6</div>
      </o-col>
      <o-col span="6">
        <div style="background: deepskyblue;" class="col">col-6</div>
      </o-col>
      <o-col span="6">
        <div style="background: lightskyblue;" class="col">col-6</div>
      </o-col>
      <o-col span="6" >
        <div style="background: deepskyblue;" class="col">col-6</div>
      </o-col>
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
  .col{
    height: 100%;
  }
</style>