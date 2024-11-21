import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import Echo from "laravel-echo";
import Pusher from "pusher-js";

// import router from './routes';

// Load environment variables
const PUSHER_APP_KEY = import.meta.env.VITE_PUSHER_APP_KEY || process.env.MIX_PUSHER_APP_KEY;
const PUSHER_CLUSTER = import.meta.env.VITE_PUSHER_APP_CLUSTER || process.env.MIX_PUSHER_APP_CLUSTER;

window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: PUSHER_APP_KEY,
//     cluster: PUSHER_CLUSTER,
//     forceTLS: true, // Enables SSL (HTTPS)
// });

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssPort: 6001,
    forceTLS: false,
    disableStats: true,
});

// Listen for an event
window.Echo.channel('orders') // Replace 'orders' with your channel name
    .listen('OrderUpdated', (event) => { // Replace 'OrderUpdated' with your event name
        console.log('Order updated:', event);
    });

createApp(App).mount('#app');
// .use(router)

