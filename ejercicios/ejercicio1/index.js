let us = document.querySelector("#user")
console.log(us)

let con = document.querySelector("#password")
console.log(con)

const btn = document.querySelector("#boton")
console.log(btn)

const miDiv = document.querySelector("#divv")
console.log(miDiv)

function alerta(){
    miDiv.innerHTML = `Hola   ${us.value}   tu contraseña es   ${con.value} `;

    
       
}
btn.addEventListener("click", alerta)