let alumno = [
  {
    infodavid:
      "David es un alumno creativo poco sociable, no le gusta la multitud, pero saca notas decentes. Le gusta la profesora de programación.",

    imagen:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",

    NOTAS: "SOCIALES: 6 | PROGRAMACIÓN: BESITOS 10 | MATES: 5",
  },

  {
    infojose:
      "Charmander es un Pokémon bípedo de color naranja, originario de zonas calientes y montañosas. Se dice que desde su nacimiento, una llama arde en la punta de su cola como indicador de su salud y fuerza vital.",

    imagen:
      "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",

    NOTAS:
      "TODO 10 EXCELENTE!!!",
  },
];

const b1 = document.querySelector("#boton1")
const b2 = document.querySelector("#boton2")
const b3 = document.querySelector("#boton3")
let miDiv = document.querySelector("#datos")
const sl = document.querySelector("#sele")


function hola(){
  if(sl.value == "DAVID"){
    miDiv.innerHTML = ` ${alumno.infodavid}
    `
  }
}
b1.addEventListener("click", hola)