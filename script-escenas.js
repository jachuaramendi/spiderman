document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.boton-filtro');
    
    const btnEscenaSiguiente = document.getElementById('btn-escena-siguiente');
    const btnEscenaAnterior = document.getElementById('btn-escena-anterior');
    const tarjetasEscenas = Array.from(document.querySelectorAll('.tarjeta-escena'));
    
    const btnBatallaSiguiente = document.getElementById('btn-batalla-siguiente');
    const btnBatallaAnterior = document.getElementById('btn-batalla-anterior');
    const tarjetasBatallas = Array.from(document.querySelectorAll('.tarjeta-batalla'));

    let peliculaFiltro = 'homecoming';
    
    let escenasFiltradas = [];
    let indiceEscenaActual = 0;

    let batallasFiltradas = [];
    let indiceBatallaActual = 0;

    function actualizarFiltros() {
        tarjetasEscenas.forEach(t => t.classList.remove('activa'));
        escenasFiltradas = tarjetasEscenas.filter(t => t.getAttribute('data-pelicula') === peliculaFiltro);
        
        indiceEscenaActual = 0;
        if (escenasFiltradas.length > 0) {
            escenasFiltradas[indiceEscenaActual].classList.add('activa');
        }

        if (escenasFiltradas.length <= 1) {
            if (btnEscenaSiguiente) btnEscenaSiguiente.style.display = 'none';
            if (btnEscenaAnterior) btnEscenaAnterior.style.display = 'none';
        } else {
            if (btnEscenaSiguiente) btnEscenaSiguiente.style.display = '';
            if (btnEscenaAnterior) btnEscenaAnterior.style.display = '';
        }

        tarjetasBatallas.forEach(t => t.classList.remove('activa'));
        batallasFiltradas = tarjetasBatallas.filter(t => t.getAttribute('data-pelicula') === peliculaFiltro);
        
        indiceBatallaActual = 0;
        if (batallasFiltradas.length > 0) {
            batallasFiltradas[indiceBatallaActual].classList.add('activa');
        }

        if (batallasFiltradas.length <= 1) {
            if (btnBatallaSiguiente) btnBatallaSiguiente.style.display = 'none';
            if (btnBatallaAnterior) btnBatallaAnterior.style.display = 'none';
        } else {
            if (btnBatallaSiguiente) btnBatallaSiguiente.style.display = '';
            if (btnBatallaAnterior) btnBatallaAnterior.style.display = '';
        }
    }

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (e) => {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');
            
            peliculaFiltro = e.target.getAttribute('data-pelicula');
            actualizarFiltros();
        });
    });

    if (btnEscenaSiguiente) {
        btnEscenaSiguiente.addEventListener('click', () => {
            if (escenasFiltradas.length === 0) return;
            escenasFiltradas[indiceEscenaActual].classList.remove('activa');
            indiceEscenaActual = (indiceEscenaActual < escenasFiltradas.length - 1) ? indiceEscenaActual + 1 : 0;
            escenasFiltradas[indiceEscenaActual].classList.add('activa');
        });
    }

    if (btnEscenaAnterior) {
        btnEscenaAnterior.addEventListener('click', () => {
            if (escenasFiltradas.length === 0) return;
            escenasFiltradas[indiceEscenaActual].classList.remove('activa');
            indiceEscenaActual = (indiceEscenaActual > 0) ? indiceEscenaActual - 1 : escenasFiltradas.length - 1;
            escenasFiltradas[indiceEscenaActual].classList.add('activa');
        });
    }

    if (btnBatallaSiguiente) {
        btnBatallaSiguiente.addEventListener('click', () => {
            if (batallasFiltradas.length === 0) return;
            batallasFiltradas[indiceBatallaActual].classList.remove('activa');
            indiceBatallaActual = (indiceBatallaActual < batallasFiltradas.length - 1) ? indiceBatallaActual + 1 : 0;
            batallasFiltradas[indiceBatallaActual].classList.add('activa');
        });
    }

    if (btnBatallaAnterior) {
        btnBatallaAnterior.addEventListener('click', () => {
            if (batallasFiltradas.length === 0) return;
            batallasFiltradas[indiceBatallaActual].classList.remove('activa');
            indiceBatallaActual = (indiceBatallaActual > 0) ? indiceBatallaActual - 1 : batallasFiltradas.length - 1;
            batallasFiltradas[indiceBatallaActual].classList.add('activa');
        });
    }

    actualizarFiltros();
});