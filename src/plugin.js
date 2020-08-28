import Toast from '@/components/Toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor()
      console.log(toast.$slots)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}