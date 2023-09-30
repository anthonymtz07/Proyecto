document.addEventListener("DOMContentLoaded", showAutos)

if("serviceWorker" in navigator){
    console.log("Si soporta")
    window.addEventListener("load",function(){
        navigator.serviceWorker.register("/serviceWorker.js")
        .then(res => console.log("Service Worker registrado"))
        .catch(err => console.log("Service worker no registrado: "+err))
    })
}