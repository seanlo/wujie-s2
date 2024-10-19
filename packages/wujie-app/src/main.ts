import './assets/main.css';
import 'vant/lib/index.css';
import WujieVue from 'wujie-vue3';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(WujieVue).mount('#app');
