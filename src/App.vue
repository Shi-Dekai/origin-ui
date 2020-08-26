<template>
  <div id="app">
    <div style="border: 1px solid black;">
      <Row gutter="20">
        <Col />
        <Col />
      </Row>

      <Row gutter="20">
        <Col span="4" />
        <Col span="20" />
      </Row>

      <Row gutter="25">
        <Col />
        <Col />
        <Col />
      </Row>
    </div>


    <hr>
    <div class="box">
      <Input value="张三" disabled/>
      <Input value="李四" readonly/>
      <Input v-model="inputValue"/>
    </div>
    <div class="box">
      <Input value="王五" @change="inputChange"/>
    </div>
    <div class="box">
      <Input value="王五" error="姓名不能少于两个字"/>
    </div>

    <div class="box">
      <Button :loading="loading1"
              @click="loading1 = !loading1">
        按钮
      </Button>
      <Button :loading="loading2" icon="setting"
              @click="loading2 = !loading2">
        按钮
      </Button>
      <Button :loading="loading3" icon="setting" icon-position="right"
              @click="loading3 = !loading3">
        按钮
      </Button>
      <ButtonGroup>
        <Button icon="left">
          上一页
        </Button>
        <Button>
          更多
        </Button>
        <Button icon="right" icon-position="right">
          下一页
        </Button>
      </ButtonGroup>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Icon from '@/components/Icon.vue';
  import ButtonGroup from '@/components/Button-group.vue';
  import Input from '@/components/Input.vue';
  import Row from '@/components/Row.vue';
  import Col from '@/components/Col.vue';

  @Component({
    components: {
      Col,
      Row,
      Input,
      ButtonGroup,
      Icon,
      Button
    },
  })
  export default class App extends Vue {
    inputValue = '带';
    loading1 = false;
    loading2 = true;
    loading3 = false;

    inputChange(e: InputEvent) {
      console.log((e.target as HTMLInputElement).value);
    }
  }
</script>

<style lang="scss">
  #app {
    margin: 20px;
  }

  .box {
    margin: 20px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 14px;
  }
</style>
