<template>
  <div>
    <div>
      <div>默认布局</div>
      <o-layout style="color: white; margin-bottom:50px;">
        <o-header style="height: 50px; background:lightskyblue;"></o-header>
        <o-content style="height: 100px; background:deepskyblue;"></o-content>
        <o-footer style="height: 50px; background:lightskyblue;"></o-footer>
      </o-layout>
    </div>
    <div>
      <div>带有侧边栏布局</div>
      <o-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <o-header style="height: 50px; background:lightskyblue;"></o-header>
        <o-layout>
          <o-sider style="height: 100px; background:#ddd; width:200px; color: black;"></o-sider>
          <o-content style="height: 100px; background:deepskyblue;"></o-content>
        </o-layout>
        <o-footer style="height: 50px; background:lightskyblue;"></o-footer>
      </o-layout>
      <div>侧边栏靠右</div>
      <o-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <o-header style="height: 50px; background:lightskyblue;"></o-header>
        <o-layout>
          <o-content style="height: 100px; background:deepskyblue;"></o-content>
          <o-sider style="height: 100px; background:#ddd; width:200px; color: black;"></o-sider>
        </o-layout>
        <o-footer style="height: 50px; background:lightskyblue;"></o-footer>
      </o-layout>
      <div>左右布局</div>
      <o-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <o-sider style=" background:#ddd; width:200px; color: black;"></o-sider>
        <o-layout>
          <o-header style="height: 50px; background:lightskyblue;"></o-header>
          <o-content style="height: 100px; background:deepskyblue;"></o-content>
          <o-footer style="height: 50px; background:lightskyblue;"></o-footer>
        </o-layout>
      </o-layout>
    </div>
  </div>
</template>

<script>
  import Layout from '../../../src/components/Layout'
  import Header from '../../../src/components/Header'
  import Footer from '../../../src/components/Footer'
  import Content from '../../../src/components/Content'
  import Sider from '../../../src/components/Sider'

  export default {
    name: 'layoutDemos',
    components: {
      'o-layout': Layout,
      'o-header': Header,
      'o-footer': Footer,
      'o-content': Content,
      'o-sider': Sider,
    }
  }
</script>