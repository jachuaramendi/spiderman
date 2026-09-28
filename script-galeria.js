document.addEventListener('DOMContentLoaded', () => {
    const pista = document.getElementById('pista-backstage');
    const tarjetas = Array.from(document.querySelectorAll('.tarjeta-backstage'));
    const btnSiguiente = document.getElementById('btn-backstage-siguiente');
    const btnAnterior = document.getElementById('btn-backstage-anterior');

    if (!pista || tarjetas.length === 0) return;

    let indiceActual = 0;

    function actualizarCarrusel() {
        tarjetas.forEach((tarjeta, index) => {
            tarjeta.classList.toggle('tarjeta-activa', index === indiceActual);
        });

        const anchoTarjeta = tarjetas[0].offsetWidth;
        const estilosPista = window.getComputedStyle(pista);
        const gap = parseInt(estilosPista.gap) || 0;
        
        const desplazamiento = -1 * indiceActual * (anchoTarjeta + gap);
        pista.style.transform = `translateX(${desplazamiento}px)`;
    }

    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', () => {
            if (indiceActual < tarjetas.length - 1) {
                indiceActual++;
                actualizarCarrusel();
            }
        });
    }

    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            if (indiceActual > 0) {
                indiceActual--;
                actualizarCarrusel();
            }
        });
    }

    window.addEventListener('resize', actualizarCarrusel);

    actualizarCarrusel();
});