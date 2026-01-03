self.addEventListener('message', (event) => {
    if (event.data.type === 'ALARME') {
        self.registration.showNotification("HORA DO REMÉDIO! 💊", {
            body: "Está na hora de tomar: " + event.data.nome,
            icon: "https://cdn-icons-png.flaticon.com/512/822/822143.png",
            vibrate: [200, 100, 200],
            tag: 'alarme-remedio',
            renotify: true,
            requireInteraction: true // A notificação não some até o usuário clicar
        });
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/')); // Abre o app ao clicar
});