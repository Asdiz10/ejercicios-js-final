let stock = [
  {
    Nombre: "Mouse",
    precio: 10,
    cantidad: 5,
  },

  {
    Nombre: "Teclado",
    precio: 20,
    cantidad: 2,
  },

  {
    Nombre: "Monitor",
    precio: 100,
    cantidad: 10,
  },
];


let miDiv = document.querySelector("#divv")
let sl = document.querySelector("#sele")
let ipt = document.querySelector("#iptt")
const btn = document.querySelector("#boton")

function tienda(){
   if(ipt.value == 0){
    miDiv.innerHTML = "No se ha introducido nada"
   } else if(ipt.value > stock[sl.value].cantidad){
    miDiv.innerHTML = "No quedan en stock"
   } else{
      miDiv.innerHTML = ` Este es el total ${ipt.value*stock[sl.value].precio} €
      `
   }
}
btn.addEventListener("click", tienda)
