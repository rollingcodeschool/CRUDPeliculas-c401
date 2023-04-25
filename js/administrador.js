import Pelicula from "./classPelicula.js";
import { sumarioValidaciones } from "./helpers.js";

//variables globales
let formularioPelicula = document.getElementById("formPelicula");
let codigo = document.getElementById("codigo"),
  titulo = document.getElementById("titulo"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  genero = document.getElementById("genero"),
  director = document.getElementById("director"),
  pais = document.getElementById("pais"),
  anio = document.getElementById("anio"),
  duracion = document.getElementById("duracion"),
  reparto = document.getElementById("reparto");

//si quiero trabajar con una array de objetos normales
// let listaPeliculas =  JSON.parse(localStorage.getItem('listaPeliculas')) || [];

//si quiero trabajar con un array de objetos de tipo Pelicula
let listaPeliculas = localStorage.getItem("listaPeliculas");
// si listaPeliculas esta vacio
if (!listaPeliculas) {
  listaPeliculas = [];
} else {
  listaPeliculas = JSON.parse(listaPeliculas).map(
    (pelicula) =>
      new Pelicula(
        pelicula.titulo,
        pelicula.descripcion,
        pelicula.director,
        pelicula.imagen,
        pelicula.genero,
        pelicula.anio,
        pelicula.duracion,
        pelicula.pais,
        pelicula.reparto
      )
  );
}

console.log(listaPeliculas);

// manejadores de eventos
formularioPelicula.addEventListener("submit", prepararFormulario);

function prepararFormulario(e) {
  e.preventDefault();
  crearPelicula();
}

function crearPelicula() {
  //validar el formulario
  let resumeErrores = sumarioValidaciones(titulo.value, descripcion.value, imagen.value, anio.value, genero.value);

  if (resumeErrores.length === 0) {
    //creo la peli
    mostrarAlert(false,'');
    let nuevaPeli = new Pelicula(
      titulo.value,
      descripcion.value,
      director.value,
      imagen.value,
      genero.value,
      anio.value,
      duracion.value,
      pais.value,
      reparto.value
    );
    console.log(nuevaPeli);
    //guardar la peli en el array
    listaPeliculas.push(nuevaPeli);
    console.log(listaPeliculas);
    //guardar el array en localstorage
    localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
    //limpiar el formulario
      limpiarFormulario();
    //mostrar un mensaje
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }else{
    //falla la validacion
    mostrarAlert(true, resumeErrores)
  }
}


function mostrarAlert(estado, resumeErrores){
  //estado = true muestro el alert, caso contrario oculto
  let alerta = document.getElementById('alertMsjError');
  if(estado){
    alerta.className = 'alert alert-danger';
    alerta.innerHTML = resumeErrores
  }else{
    alerta.className = 'alert alert-danger d-none';
  }
}

function limpiarFormulario(){
  formularioPelicula.reset();
}