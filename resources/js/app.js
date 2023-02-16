import Echo from "laravel-echo";
import './bootstrap';

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
        console.log(e);
        document.getElementById('hello').textContent = e.user.color;
        document.getElementById('hello').style.color = e.user.color;
    })
