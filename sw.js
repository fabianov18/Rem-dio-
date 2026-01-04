self.addEventListener('message', (event) => {
    if (event.data.type === 'ALARME') {
        const options = {
            body: "HORA DE TOMAR: " + event.data.nome + " (" + event.data.dose + ")",
            icon: "https://cdn-icons-png.flaticon.com/512/822/822143.png",
            badge: "https://cdn-icons-png.flaticon.com/512/822/822143.png",
            vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 450],
            data: { dateOfArrival: Date.now() },
            actions: [
                { action: 'confirmar', title: '✅ JÁ TOMEI', icon: '' },
                { action: 'fechar', title: '❌ FECHAR', icon: '' }
            ],
            tag: 'alarme-remedio',
            renotify: true,
            requireInteraction: true // Faz a notificação ficar travada na tela até você clicar
        };

        event.waitUntil(
            self.registration.showNotification("💊 ALERTA DE SAÚDE", options)
        );
    }
});

// Ao clicar na notificação ou no botão "Já tomei"
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    if (event.action === 'confirmar') {
        // Aqui você pode adicionar lógica futura de registro
    }
    event.waitUntil(
        clients.openWindow('/') // Abre o app para parar o som interno se estiver tocando
    );
});