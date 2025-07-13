self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    clients.claim();
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(windowClients => {
            const url = event.notification.data.url || '/';
            for (let client of windowClients) {
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            return clients.openWindow(url);
        })
    );
})
