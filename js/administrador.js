import Pelicula from "./classPelicula.js";

//variables globales
let formularioPelicula = document.getElementById('formPelicula');
let listaPeliculas = [];

// manejadores de eventos
formularioPelicula.addEventListener('submit', prepararFormulario);


function prepararFormulario(e){
    e.preventDefault();
    crearPelicula();
}

function crearPelicula(){
    //validar el formulario
    let nuevaPeli = new Pelicula('Super mario','alguna desc','-','url de imagen','aventura', 2023, 93,'EEUU','varios actores');
    console.log(nuevaPeli);
    //guardar la peli en el array
    listaPeliculas.push(nuevaPeli)
    console.log(listaPeliculas)
    //guardar el array en localstorage
    localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas));
    //limpiar el formulario
}