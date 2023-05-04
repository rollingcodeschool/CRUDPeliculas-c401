import Pelicula from "./classPelicula.js";

let filaPeliculas = document.getElementById('filaPeliculas');
// si quiero trabajar con un array de objetos tipo pelicula.
let listaPeliculas = localStorage.getItem("listaPeliculas");
// Si listaPeliculas está vacío
if (!listaPeliculas) {
  listaPeliculas = [];
} else {
  listaPeliculas = JSON.parse(listaPeliculas).map(
    (pelicula) =>
      new Pelicula(
        pelicula.codigo,
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
//se cargan las cards de las peliculas guardadas en el local storage.
cargaInicial()

// funciones
function cargaInicial() {
    if (listaPeliculas.length > 0) {
      //dibujar las filas de la tabla
      listaPeliculas.map((pelicula) => crearCard(pelicula));
    } else {
      // le muestro el msj que no tengo elementos
    }
  }

console.log('se cargo bien el ls');

function crearCard(pelicula){
    filaPeliculas.innerHTML += `
    <aside class="col-12 col-md-6 col-lg-3">
            <article class="card h-100">
              <img
                src="${pelicula.imagen}"
                alt="superMarioBros"
                class="card-img"
              />
              <article class="card-body text-start">
                <h5>${pelicula.titulo}</h5>
              </article>
              <article class="card-footer text-end">
                <button class="btn btn-danger" onclick="enviarDetallePelicula('${pelicula.codigo}')">Ver más</button>
              </article>
            </article>
          </aside>
    `
}

window.enviarDetallePelicula = (codigo) =>{
    console.log(codigo);
    //enviar a la web de detalle de la pelicula
    console.log(window.location.origin + '/pages/detalle.html?codigo=' + codigo);
    window.location.href = window.location.origin + '/pages/detalle.html?codigo=' + codigo;
}

