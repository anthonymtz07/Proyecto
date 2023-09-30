const container = document.querySelector(".container")
/*const container = document.querySelector(".container");*/
const autos = [
    {name: "Nissan GTR (gris)", image: "/images/gtrNissan.jpeg"},
    {name: "Nissan GTR (naranja)", image: "/images/gtrNissan2.jpg"},
    {name: "Nissan GTR (gris2)", image: "/images/gtrNissan3.jpg"},
    {name: "Nissan GTR (rojiso)", image: "/images/gtrNissan4.jpg"},
    {name: "Nissan GTR (plateado)", image: "/images/gtrNissan5.jpg"},
    {name: "Nissan GTR (plateado2)", image: "/images/gtrNissan6.jpg"},
]

const showAutos = () =>{
    let output = ""

    autos.forEach(
    ({name,image}) => 
    (output += `
        <div class="card">
            <img class = "card-avatar" src=${image} />
            <h1 class = "card-title">${name}</h1>
        </div>
    `))
    container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showAutos)

if("serviceWorker" in navigator){
    console.log("Si soporta")
    window.addEventListener("load",function(){
        navigator.serviceWorker.register("/serviceWorker.js")
        .then(res => console.log("Service Worker registrado"))
        .catch(err => console.log("Service worker no registrado: "+err))
    })
}