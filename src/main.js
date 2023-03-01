import { createApp } from 'vue'
import Vue3TouchEvents from "vue3-touch-events";
import App from './App.vue'

import './assets/main.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdRestartalt, MdClose, MdAdd, MdRemove } from "oh-vue-icons/icons";

addIcons(MdRestartalt, MdClose, MdAdd, MdRemove);

const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.use(Vue3TouchEvents);

app.component("v-icon", OhVueIcon);
app.mount('#app')

