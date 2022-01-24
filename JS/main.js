const navToogle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");


navToogle.addEventListener("click", () => {
   navMenu.classList.toggle("nav-menu__visible");
});

const menuItem = document.querySelector('.nav-menu__item');

menuItem.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu__visible");
}
);
const menuItem1 = document.querySelector('.nav-menu__item1');

menuItem1.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu__visible");
}
);

const menuItem2 = document.querySelector('.nav-menu__item2');

menuItem2.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu__visible");
}
);

const menuItem3 = document.querySelector('.nav-menu__item3');

menuItem3.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu__visible");
}
);


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