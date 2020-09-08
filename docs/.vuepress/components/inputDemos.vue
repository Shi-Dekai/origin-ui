<template>
  <div>
    <o-input value="默认输入框"></o-input>
    <o-input value="禁用" disabled></o-input>
    <o-input value="只读" readonly></o-input>
    <o-input value="错误提示" error="请输入正确信息"></o-input>
    <div>
      <div>双向绑定</div>
      <o-input v-model="value1" placeholder="支持v-model"></o-input>
      <span>value1:{{ value1 }}</span>
    </div>
    <div>
      <div>change事件</div>
      <o-input :value="value2" @change="change" placeholder="支持change事件"></o-input>
      <span>value2:{{ value2 }}</span>
    </div>
  </div>
</template>

<script>
  import Input from '../../../src/components/Input'

  export default {
    components: {
      'o-input': Input
    },
    data() {
      return {
        value1: '1',
        value2: '2'
      }
    },
    methods: {
      change(event) {
        this.value2 = event
      }
    }
  }
</script>