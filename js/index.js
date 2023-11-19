/*Elements -> firebase.js*/
import {
    save_user,
    onGetUsers,
    getFunko,
    updateFunko,
    getUser 
} from "./firebase.js";

/*Create this const for to use in the html */
const padloadForm = document.getElementById("padload-form");
const padloadContainer = document.getElementById("padload-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
    const querySnapshot = await getUser();

    onGetUsers((querySnapshot) => {
        // funkosContainer.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const padload = doc.data();

            //console.log(padload);
        });        
    });
});

/*Create and save a new user */
padloadForm.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const email = padloadForm["email"];
    const password = padloadForm["password"];
    const usuario = padloadForm["usuario"];

    console.log(email.value, usuario.value);

    await save_user(email.value, password.value, usuario.value);
    window.location.href = "../html/notificacion.html"
});