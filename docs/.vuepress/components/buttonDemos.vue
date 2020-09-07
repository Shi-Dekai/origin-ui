<template>
  <div>
    <o-button>默认按钮</o-button>
    <o-button icon="setting">带有icon按钮</o-button>
    <o-button icon="setting" icon-position="right">icon在右边</o-button>
    <o-button loading>加载中</o-button>
    <o-button icon="setting" :loading="loading1" @click="onClick">点击加载</o-button>
  </div>
</template>

<script>
  import Button from '../../../src/components/Button'

  export default {
    name: 'buttonDemos',
    components: {
      'o-button': Button,
    },
    data(){
      return{
        loading1:false
      }
    },
    methods:{
      onClick(){
        this.loading1 = !this.loading1
      }
    }
  }
</script>