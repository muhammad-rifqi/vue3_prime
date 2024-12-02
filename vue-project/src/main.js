// import './assets/main.css'

import { createApp } from 'vue'
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import App from './App.vue'


const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme : {
        preset : Aura
    }
});

app.mount('#app')
