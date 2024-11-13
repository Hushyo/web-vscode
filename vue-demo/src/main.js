

import { createApp } from 'vue'
import App from './index.vue'
import 'p5-ui/dist/style.css'
import router from './router.js'
import P5UI from 'p5-ui'

const app=createApp(App);
app.use(router)
app.use(P5UI)
app.mount("#app");



