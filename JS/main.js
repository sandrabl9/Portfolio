const navToogle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
//const menuItem = doccument.querySelectorAll(".nav-menu__item")

navToogle.addEventListener("click", () => {
   navMenu.classList.toggle("nav-menu__visible");
});

//menuItem.addEventListener("click", () => {
  //  navMenu.classList.toggle("nav-menu__invisible");
//});
// Guardar estado imagen activa
let imagenActiva = 0;

//Seleccionar las imagenes
const imagenes = document.querySelectorAll(".image");

//Escuchar los "clicks" en cada una de ellas

imagenes.forEach((imagen, indice) => {
    imagen.addEventListener("click", function() {
        cambiarImagen(indice)
    });
});


//Cambiar el estado de la imagen

function cambiarImagen(indice) {
    imagenes[imagenActiva].classList.remove("activa")
    imagenes[indice].classList.add("activa")
    imagenActiva = indice
};