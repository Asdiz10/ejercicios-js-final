const zapatillas = [
  { marca: "Nike", 
    modelo: "Air Max", 
    precio: 120 },

  { marca: "Adidas", 
    modelo: "Stan Smith", 
    precio: 90 }
];

let miDiv1 = document.querySelector("#div1")
const btn1 = document.querySelector("#boton1")

function mostrarZapas(){
    miDiv1.innerHTML = ""
    
    for(let i = 0; i < zapatillas.length; i++){
        miDiv1.innerHTML += `
            <div class="tarjeta">
            <h3>Marca: ${zapatillas[i].marca}</h3>
            <h3>Modelo: ${zapatillas[i].modelo}</h3>
            <p>Precio: ${zapatillas[i].precio}</p>
            </div>
        `
    }

    
}
btn1.addEventListener("click", mostrarZapas)



let ma = document.querySelector("#marca").value
let mo = document.querySelector("#modelo").value
let pre = document.querySelector("#precio").value


function añadir(){
    let neuvas = {
        marca: ma.value,
        modelo: mo.value,
        precio: pre.value,
    };

    zapatillas.push(neuvas)

    
}
btn1.addEventListener("click", añadir)
