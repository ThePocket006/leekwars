import './assets/main.css'

import {createApp, provide} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueAxios from "vue-axios"
import axios from "axios";
import {plugins} from "@/common/plugins";

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.use(router)
app.use(plugins.services)

app.mount('#app')
