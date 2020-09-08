import Toast from '../src/components/Toast.vue'

let currentToast

function createToast({Vue, propsData, message, onClose}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}

export default {
  install(Vue, options,) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue, propsData: toastOptions, message, onClose: () => {
          currentToast = null
        }
      })
    }
  }
}




