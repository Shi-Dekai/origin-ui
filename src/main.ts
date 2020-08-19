import Vue from 'vue';
import App from './App.vue';
import Button from '@/components/Button.vue';
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');



//单元测试
const expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  vm.$mount();
  const useElement = vm.$el.querySelector('use');
  const href = useElement?.getAttribute('xlink:href');
  expect(href).to.eq('#i-setting');
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  });
  vm.$mount();
  const useElement = vm.$el.querySelector('use');
  const href = useElement?.getAttribute('xlink:href');
  expect(href).to.eq('#i-loading');
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  });
  vm.$mount(div);
  const svg = vm.$el.querySelector('svg');
  const {order} = window.getComputedStyle(svg!);
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    }
  });
  vm.$mount();
  const spy = chai.spy(function () {console.log('hello')});
  vm.$on('click', spy);
  const button = vm.$el;
  button.dispatchEvent(new Event('click'));
  expect(spy).to.have.been.called();
}