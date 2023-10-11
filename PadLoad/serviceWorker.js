const staticPadload = "dev-padload-site-v2";
const assets = [
    "/", 
    "/index.html",
    "/css/styles.css",
    "/js/app.js",
    "/js/contraseña.js",
    "/img/logo.png"

]

self.addEventListener("install",installEvent =>{
    installEvent.waitUntil(
        caches.open(staticPadload).then(cache =>{
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch",fetchEvent =>{
    fetchEvent.repondWith( //Le ponemos el respondWith por que no queremos la respuesta que nos da el navegador
    //Nosotros queremos el catche
        catches.match(fetchEvent.request)
            .then(res => {
                return res || fetch(fetchEvent.request)
            })
    );
});
