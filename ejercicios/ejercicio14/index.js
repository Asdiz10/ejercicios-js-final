let stock = [
  {
    Producto0: "Mouse",
    precio: "10",
    cantidad: "5",
  },

  {
    Producto0: "Teclado",
    precio: "20",
    cantidad: "2",
  },

  {
    Producto0: "Monitor",
    precio: "100",
    cantidad: "0",
  },
];


let miDiv = document.querySelector("#divv")
let sl = document.querySelector("#sele")
let ipt = document.querySelector("#iptt")
const btn = document.querySelector("#boton")

function tienda(){
    if(ipt.value > stock[0].cantidad){
        
    }
}
btn.addEventListener("click", tienda)
