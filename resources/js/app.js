import Echo from "laravel-echo";
import './bootstrap';
import Swal from "sweetalert2";
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import {Link} from '@inertiajs/vue3';
import alertSound from '../../public/audio/alert.mp3';
createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link',Link)
      .mount(el)
  },
})



window.echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: window.location.hostname,
    wsPort: 6001,   
    forceTLS: false,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
});

echo.channel('fav-color')
    .listen('UserColorChanged',(e)=>{
        const audio = new Audio(alertSound);
        audio.play();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
    })
