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


const btn4 = document.querySelector("#boton4")
let divv = document.querySelector("#div2")
let selec = document.querySelector("#sele")
let ipt1 = document.querySelector("#input")

function hola2(){
    divv.innerHTML = ` " ${ipt1.value} - ${selec.value} "
    `

}
btn4.addEventListener("click", hola2)