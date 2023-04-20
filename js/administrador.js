import Pelicula from "./classPelicula.js";

//variables globales
let formularioPelicula = document.getElementById('formPelicula');
let codigo = document.getElementById('codigo'),
titulo = document.getElementById('titulo'),
descripcion = document.getElementById('descripcion'),
imagen = document.getElementById('imagen'),
genero = document.getElementById('genero'),
director = document.getElementById('director'),
pais = document.getElementById('pais'),
anio = document.getElementById('anio'),
duracion = document.getElementById('duracion'),
reparto = document.getElementById('reparto');

//si quiero trabajar con una array de objetos normales
// let listaPeliculas =  JSON.parse(localStorage.getItem('listaPeliculas')) || [];

//si quiero trabajar con un array de objetos de tipo Pelicula
let listaPeliculas =  localStorage.getItem('listaPeliculas');
// si listaPeliculas esta vacio
if(!listaPeliculas){
    listaPeliculas = [];
}else{
    listaPeliculas = JSON.parse(listaPeliculas).map((pelicula) => 
    new Pelicula(
        pelicula.titulo, 
        pelicula.descripcion, 
        pelicula.director, 
        pelicula.imagen, 
        pelicula.genero, 
        pelicula.anio, 
        pelicula.duracion, 
        pelicula.pais, 
        pelicula.reparto)  
    )
}

console.log(listaPeliculas)

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