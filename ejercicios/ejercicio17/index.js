let cartelera = [
  {
    titulo: "Avatar",
    director: "James Cameron",
    año: 2009,
  },

  {
    titulo: "El niño y la Garza",
    director: "Hayao Miyazaki",
    año: 2009,
  },

  {
    titulo: "Seven",
    director: "David fincher",
    año: 1995,
  },
];

let miDiv1 = document.querySelector("#div1")
const btn1 = document.querySelector("#boton1")

let pt1 = document.querySelector("#ipt1")
let pt2 = document.querySelector("#ipt2")
let pt3 = document.querySelector("#ipt3")

function mostrarPelis(){

    let pelinueva = {
        titulo: pt1.value,
        director: pt2.value,
        año: Number(pt3.value),
    }

    cartelera.push(pelinueva)

    
    miDiv1.innerHTML = " "
    for(let i = 0; i < cartelera.length; i++){
        miDiv1.innerHTML +=`
            <div class="pelicula">
            <h3>Título: ${cartelera[i].titulo}</h3>
            <p>Director: ${cartelera[i].director}</p>
            <p>Año: ${cartelera[i].año}</p>
            </div>


        `

    }

}
btn1.addEventListener("click", mostrarPelis)



let miDiv2 = document.querySelector("#div3")
let ipt3 = document.querySelector("#input1")



function buscar(){
    if(ipt3.value == "Avatar"){
        miDiv2.innerHTML = `
        <div class="pelicula">
        <ul>
            <li>${cartelera[0].titulo}</li>
            <li>${cartelera[0].director}</li>
        </ul>  
        </div>
        `;
    }

}
ipt3.addEventListener("input",buscar)