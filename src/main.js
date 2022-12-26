import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import Lottie from './components/Lottie.vue'
// export {Lottie}

createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
