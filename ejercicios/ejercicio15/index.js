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
    miDiv1.classList.add("resaltado")
}
btn2.addEventListener("click", hola)


const btn3 = document.querySelector("#boton3")

function hola1(){
    miDiv1.innerHTML = " "
    miDiv1.classList.add("resaltado")
}
btn3.addEventListener("click", hola1)