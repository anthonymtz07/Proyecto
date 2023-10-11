const container = document.querySelector(".container")
const datos = [
    {app: "Facebook", psw: "adf15456", frecuente: true},
    {app: "Instagram", psw: "14lder36", frecuente: true},
    {app: "Twitter", psw: "a2d2g8tq", frecuente: false},
    {app: "Soriana", psw: "qw123ert", frecuente: false},
    {app: "Banamex", psw: "zs23s4dj", frecuente: true},
    {app: "Gmail", psw: "36dawe12", frecuente: true},
    {app: "Perfil beca", psw: "5623dfss", frecuente: true},
    {app: "Alumnos", psw: "#$26df3f", frecuente: true},
    {app: "Telmex", psw: "154gtdhj", frecuente: false},
]

const contraseñas = (showAll) =>{
    let outputTrue = "";
    datos.forEach(
        ({app, psw, frecuente})=>{
        if (showAll || frecuente) {
            outputTrue += `
              <div class="contraseñaTrue">
                <table>
                    <tr>
                        <td> <b>App:</b> ${app}</td>
                        <td> <b>Psw:</b> ${psw}</td>
                    </tr>
                </table>
              </div>
            `;
          }
        });
    container.innerHTML = outputTrue;
};

document.addEventListener("DOMContentLoaded", () =>{
    contraseñas(true);

    const btnFrecuentes = document.getElementById("todas");
    btnFrecuentes.addEventListener("click",()=>{contraseñas(true)});

    const btnTodas = document.getElementById("frecuentes");
    btnTodas.addEventListener("click",()=>{contraseñas(false)})
});