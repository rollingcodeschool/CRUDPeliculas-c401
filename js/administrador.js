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

cargaInicial();

//funciones
function cargaInicial(){
  if(listaPeliculas.length > 0){
    //dibujar las filas de la tabla
    listaPeliculas.map((pelicula, indice)=> crearFila(pelicula, indice + 1))
  }
  //le muestro el msj que no tengo elementos
}

function crearFila(pelicula, indice){
  let tablaPelicula = document.querySelector('tbody');
  tablaPelicula.innerHTML += `<tr>
  <th scope="row">${indice}</th>
  <td>${pelicula.titulo}</td>
  <td class="text-truncate ancho pe-5">
    ${pelicula.descripcion}
  </td>
  <td class="text-truncate ancho pe-5">
    ${pelicula.imagen}
  </td>
  <td>${pelicula.genero}</td>
  <td>
    <button
      type="button"
      class="btn btn-warning mx-1"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <i class="bi bi-pencil-square"></i></button
    ><button type="button" class="btn btn-danger mx-1">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>` 
}


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
      'Pelicula creada',
      'La pelicula fue correctamente almacenada',
      'success'
    )
    //dibuja la fila
    crearFila(nuevaPeli, listaPeliculas.length);
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