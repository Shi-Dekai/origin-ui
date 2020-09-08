<template>
  <div>
    <o-collapse :selected.sync="selectedArray">
      <o-collapse-item title="标题1" name="1">内容1</o-collapse-item>
      <o-collapse-item title="标题2" name="2">内容2</o-collapse-item>
      <o-collapse-item title="标题3" name="3">内容3</o-collapse-item>
    </o-collapse>
    <div>一次最多展示一个</div>
    <o-collapse :selected.sync="selectedArray" single>
      <o-collapse-item title="标题1" name="1">内容1</o-collapse-item>
      <o-collapse-item title="标题2" name="2">内容2</o-collapse-item>
      <o-collapse-item title="标题3" name="3">内容3</o-collapse-item>
    </o-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/components/Collapse'
  import CollapseItem from '../../../src/components/CollapseItem'

  export default {
    name: 'collapseDemo',
    components: {'o-collapse': Collapse, 'o-collapse-item': CollapseItem},
    data() {
      return {
        selectedArray: ['1']
      }
    }
  }
</script>