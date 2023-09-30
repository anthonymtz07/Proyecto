const staticGtrs = "dev-gtr-site-v1";
const assets = [
    "/", 
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/gtrNissan.jpeg",
    "/images/gtrNissan2.jpg",
    "/images/gtrNissan3.jpg",
    "/images/gtrNissan4.jpg",
    "/images/gtrNissan5.jpg",
    "/images/gtrNissan6.jpg",
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
