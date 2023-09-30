const staticGtrs = "dev-gtr-site-v1";
const assets = [
    "/", 
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/logo.png"
]

self.addEventListener("install",installEvent =>{
    installEvent.waitUntil(
        caches.open(staticGtrs).then(cache =>{
            cache.addAll(assets);
        })
    )
})

self.addEventListener("fetch",fetchEvent =>{
    fetchEvent.repondWith( //Le ponemos el respondWith por que no queremos la respuesta que nos da el navegador
    //Nosotros queremos el catche
        catches.match(fetchEvent.request)
            .then(res => {
                return res || fetch(fetchEvent.request)
            })
    )
})
