// // querySelector
// // querySelectorAll
// // getElementById
// // getElementsByClassName
// // getElementsByTagName 


// const seccionCard = document.querySelector(".contenedor-card")
// const tarjeta = document.querySelector(".card")
// const texto = document.querySelector(".texto")

// // console.log(seccionCard) // Nina
// // console.log(tarjeta.parentElement) // La mama de Naty

// // // ver el padre de un elemento (siempre uno)
// // console.log(tarjeta.parentElement)

// // // ver los hijos de un elemento (siempre es una lista, 
// // // incluso si el elemento tiene solo un hijo)
// // console.log(tarjeta.children) 


// // puedo darle ordenes al padre de un elemento (incluye eventos)
// // tarjeta.parentElement.style.backgroundColor = "red"


// // con los hijos es mas complejo porque traen siempre una lista
// // no puedo modificar directamente las propiedades de los children
// // console.log(tarjeta.children)
// // console.log(tarjeta.children[0])
// tarjeta.children[0].style.backgroundColor = "red"


// console.log(texto.children)


// // para asignar propiedades a los hijos debemos usar un for:
// for (let i = 0; i < texto.children.length; i++) {
//   console.log(texto.children[i])
//   texto.children[i].style.color = "green"
// }

// // y tambien funciones:
// for (let i = 0; i < texto.children.length; i++) {
//   texto.children[i].onclick = () => {
//     alert("hola")
//   } 
// }



// const botones = document.querySelectorAll(".productos button")

// console.log(botones)

// for (let i = 0; i < botones.length; i++) {
//   botones[i].onclick = () => {
//     // que la tarjeta que contiene al boton se ponga verde
//     botones[i].parentElement.style.backgroundColor = "green"
//   }
  
// }



// const seccion = document.querySelector(".imagen")
// const div = document.querySelector(".contenedor-imagen")
// const img = document.querySelector(".contenedor-imagen img")


// seccion.onclick = () => {
//   console.log("SECCION")
// }

// div.onclick = () => {
//   console.log("click en el div")
// }

// img.onclick = (e) => {
  
//   e.stopPropagation()
//   console.log("IMAGEN")
// }



// CRUD elements
// Create Update Delete 

const tarjeta = document.querySelector(".card")
const boton = document.querySelector(".card button")
const botonBorrar = document.querySelector("#borrar")
let seEstaMostrandoLaImagen = false

boton.onclick = () => {
  if (seEstaMostrandoLaImagen) {
    const img = document.querySelector("img")
    tarjeta.removeChild(img)
    seEstaMostrandoLaImagen = false
  }
  else {
    const img = document.createElement("img")
    img.src = "http://www.placekitten.com/200"
    img.classList.add("rojo")
  
    img.onclick = () => {
      alert("click en esta imagen")
    }
    tarjeta.appendChild(img)
    seEstaMostrandoLaImagen = true
  }
}

