document.addEventListener('DOMContentLoaded', function() {
    // Obtener Ubicación
    const getLocationBtn = document.getElementById('getLocationBtn');
    getLocationBtn.addEventListener('click', getLocation);
  
    // Abrir Cámara
    //const openCameraBtn = document.getElementById('openCameraBtn');
    //openCameraBtn.addEventListener('click', openCamera);
  
    // Mostrar Notificación
    //const showNotificationBtn = document.getElementById('showNotificationBtn');
    //showNotificationBtn.addEventListener('click', showNotification);
  });
  
  // Función para obtener la ubicación
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Ubicación: Latitud ${position.coords.latitude}, Longitud ${position.coords.longitude}`);
          window.location.href = "../html/contraseñas.html"
        },
        (error) => {
          console.error(`Error al obtener la ubicación: ${error.message}`);
        }
      );
    } else {
      alert('La geolocalización no es compatible en este navegador.');
    }
  }
  
  // Función para abrir la cámara
  //function openCamera() {
    //alert('Esta función no está disponible en este entorno web. Utiliza una aplicación nativa.');
    // Aquí podrías redirigir a una aplicación específica de la cámara si fuera una aplicación móvil.
  //}
  
  // Función para mostrar una notificación
  //function showNotification() {
    //if ('Notification' in window) {
      //Notification.requestPermission().then((permission) => {
        //if (permission === 'granted') {
          //new Notification('¡Hola!', {
            //body: 'Esta es una notificación de ejemplo.'
          //});
        //}
      //});
    //} else {
      //alert('Las notificaciones no son compatibles en este navegador.');
    //}
  //}
  