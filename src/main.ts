import { createApp } from 'vue';
import App from './App.vue';
import { vuetify } from './plugins/vuetify';
import { router } from './router';
import './style.css'; // or ./assets/main.css depending on your file

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
