document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.boton-filtro');
    const btnSiguiente = document.getElementById('btn-personaje-siguiente');
    const btnAnterior = document.getElementById('btn-personaje-anterior');
    
    // Agarramos todas las tarjetas del HTML
    const tarjetas = Array.from(document.querySelectorAll('.tarjeta-personaje'));
    
    let peliculaFiltro = 'homecoming'; // Película por defecto
    let tarjetasFiltradas = [];
    let indiceActual = 0;

    function actualizarFiltro() {
        // 1. Apagamos todas las tarjetas
        tarjetas.forEach(t => t.classList.remove('activa'));
        
        // 2. Filtramos asegurándonos de que tengan el atributo
        tarjetasFiltradas = tarjetas.filter(t => {
            const peliculas = t.getAttribute('data-peliculas');
            return peliculas && peliculas.includes(peliculaFiltro);
        });
        
        // 3. Prendemos la primera de la lista filtrada
        indiceActual = 0;
        if (tarjetasFiltradas.length > 0) {
            tarjetasFiltradas[indiceActual].classList.add('activa');
        }
    }

    // Clics en los botones de películas
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (e) => {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');
            
            peliculaFiltro = e.target.getAttribute('data-pelicula');
            actualizarFiltro();
        });
    });

    // Flecha Siguiente
    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', () => {
            if (tarjetasFiltradas.length === 0) return;
            
            tarjetasFiltradas[indiceActual].classList.remove('activa');
            indiceActual = (indiceActual < tarjetasFiltradas.length - 1) ? indiceActual + 1 : 0;
            tarjetasFiltradas[indiceActual].classList.add('activa');
        });
    }

    // Flecha Anterior
    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            if (tarjetasFiltradas.length === 0) return;
            
            tarjetasFiltradas[indiceActual].classList.remove('activa');
            indiceActual = (indiceActual > 0) ? indiceActual - 1 : tarjetasFiltradas.length - 1;
            tarjetasFiltradas[indiceActual].classList.add('activa');
        });
    }

    // Arrancamos
    actualizarFiltro();
});