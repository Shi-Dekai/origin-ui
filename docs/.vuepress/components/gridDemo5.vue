<template>
  <div>
    <o-row>
      <o-col span="2"
             :ipad="{span:'8'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'16'}"
             :wide-pc="{span:'22'}"
             style="background: lightskyblue;"></o-col>
      <o-col span="22"
             :ipad="{span:'16'}"
             :narrow-pc="{span:'12'}"
             :pc="{span:'8'}"
             :wide-pc="{span:'2'}"
             style="background: deepskyblue;"></o-col>
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