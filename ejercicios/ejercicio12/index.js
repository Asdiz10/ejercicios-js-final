let info = {
  infogene:
    "Charmander es un Pokémon bípedo de color naranja, originario de zonas calientes y montañosas. Se dice que desde su nacimiento, una llama arde en la punta de su cola como indicador de su salud y fuerza vital.",

  imagen:
    "https://static.wikia.nocookie.net/doblaje/images/d/de/Charmander_Anime.png/revision/latest/scale-to-width/360?cb=20250119211347&path-prefix=es",

  características:
    "Tipo: Fuego | Habilidad: Mar Llamas | Debilidad: Agua, Tierra y Roca.",
};

let b1 = document.querySelector("#boton1")
let b2 = document.querySelector("#boton2")
let b3 = document.querySelector("#boton3")
let miDiv = document.querySelector("#todo")

function b11(){
    miDiv.innerHTML = `<p class=" text-white">${info.infogene}</p>
    `
    miDiv.classList.add("bg-black")

}
b1.addEventListener("click", b11)

function b22(){
    miDiv.innerHTML = ` <img src="${info.imagen}">
    `
    miDiv.classList.add("bg-slate-400")
    miDiv.classList.remove("bg-black")


}
b2.addEventListener("click", b22)



function b33(){
    miDiv.innerHTML = ` <p>${info.características}</p>
    `
    miDiv.classList.remove("bg-slate-400")
}
b3.addEventListener("click", b33)











