document.addEventListener('DOMContentLoaded', () => {
    const requestPermissionButton = document.getElementById('requestPermission');

    if ('Notification' in window) {
        // Verificar si el navegador soporta notificaciones

        requestPermissionButton.addEventListener('click', () => {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    showNotification('¡Permiso concedido!', 'Ahora recibirás notificaciones.');
                    window.location.href = "../html/gps.html"
                } else if (permission === 'denied') {
                    showNotification('Permiso denegado', 'Puedes habilitar las notificaciones en la configuración del navegador.');
                    window.location.href = "../index.html"
                }
            });
        });
    } else {
        // El navegador no soporta notificaciones
        requestPermissionButton.disabled = true;
        requestPermissionButton.textContent = 'Notificaciones no soportadas';
    }

    function showNotification(title, message) {
        new Notification(title, { body: message });
    }
});