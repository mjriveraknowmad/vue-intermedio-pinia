import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const pinia = createPinia();

const app = createApp(App);

app.use(VueQueryPlugin)
app.use(pinia);
app.use(router);

app.mount('#app');
