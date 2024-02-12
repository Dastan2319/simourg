import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'


const pinia = createPinia()
createApp(App).use(pinia).use(VueLazyload).use(router).mount('#app')
