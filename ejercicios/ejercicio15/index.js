const btn = document.querySelector("#boton")

function alerta(){
    console.log("Sistema Iniciado")
}
btn.addEventListener("click", alerta)


const btn2 = document.querySelector("#boton2")
let miDiv1 = document.querySelector("#div1")

function hola(){
    miDiv1.innerHTML = ` Cragando datos...
    `
}
btn2.addEventListener("click", hola)