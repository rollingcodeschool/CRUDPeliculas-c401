//obtener el parametro de la url
// console.log(window.location.search)

const parametroCodigo = new URLSearchParams(window.location.search);
// console.log(parametroCodigo);
// console.log(parametroCodigo.get('codigo'));

const listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];

const peliBuscada = listaPeliculas.find((pelicula)=> pelicula.codigo === parametroCodigo.get('codigo'))

const seccion =  document.getElementById('seccionDetallePelicula');

seccion.innerHTML = `<article class="card mb-3">
<aside class="row g-0">
  <div class="col-md-4 text-center text-md-start">
    <img
      src="${peliBuscada.imagen}"
      class="img-fluid rounded-start"
      alt="${peliBuscada.titulo}"
    />
  </div>
  <article class="col-md-8">
    <article class="card-body">
      <h5 class="card-title">${peliBuscada.titulo}</h5>
      <p class="card-text">
        ${peliBuscada.descripcion}
      </p>
      <p class="card-text">
        Género:
        <span class="badge rounded-pill text-bg-primary"
          >${peliBuscada.genero}</span
        >
      </p>
      <p class="card-text">Año: ${peliBuscada.anio}</p>
      <p class="card-text">Duración: ${peliBuscada.duracion}min</p>
      <p class="card-text">País: ${peliBuscada.pais}</p>
      <p class="card-text">Reparto: ${peliBuscada.reparto}</p>
      <p class="card-text">
        <small class="text-body-secondary"
          >Last updated 3 mins ago</small
        >
      </p>
    </article>
  </article>
</aside>
</article>`