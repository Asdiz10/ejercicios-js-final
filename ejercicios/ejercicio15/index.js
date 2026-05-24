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

let divvv = document.querySelector("#div3")
let ipt2 = document.querySelector("#input2")

function hola2(){
    divv.innerHTML = ` " ${ipt1.value} - ${selec.value} "
    `
    divvv.innerHTML = ` <img src="${ipt2.value}">
    `
}
btn4.addEventListener("click", hola2)


const videojuegos = [
  { id: 1, titulo: "Zelda", genero: "Aventura", precio: 60, stock: 5 },

  { id: 2, titulo: "FIFA 24", genero: "Deporte", precio: 70, stock: 2 },

  { id: 3, titulo: "Doom", genero: "Acción", precio: 30, stock: 0 },

  { id: 4, titulo: "Minecraft", genero: "Creativo", precio: 20, stock: 10 }
];




const btn5 = document.querySelector("#boton5")
let container = document.querySelector("#contenedor")

function pintarjuegos(){
    container.innerHTML="";
    for (let i = 0; i < videojuegos.length; i++){
        
        container.innerHTML += `

            <div class="tarjetas">
            <h3>${videojuegos[i].titulo}</h3>
            <p>Género: ${videojuegos[i].genero} </p>
            <p>Precio: ${videojuegos[i].precio}</p>
            <p>Disponibles: ${videojuegos[i].stock}</p>
            </div>



        `
    }
}
btn5.addEventListener("click", pintarjuegos)
