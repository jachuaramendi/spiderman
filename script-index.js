document.addEventListener('DOMContentLoaded', () => {
    const pista = document.getElementById('pista-carrusel');
    const tarjetas = Array.from(document.querySelectorAll('.tarjeta-momento-destacado'));
    const btnSiguiente = document.getElementById('boton-siguiente-momento');
    const btnAnterior = document.getElementById('boton-anterior-momento');

    if (!pista || tarjetas.length === 0) return;

    let indiceActual = 2;

    function actualizarCarrusel() {
        tarjetas.forEach((t, i) => {
            t.classList.toggle('tarjeta-activa', i === indiceActual);
        });

        const desplazamientoUnitario = 310;

        const desplazamiento = -1 * (indiceActual - 2) * desplazamientoUnitario;
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

    tarjetas.forEach((t, index) => {
        t.addEventListener('click', () => {
            indiceActual = index;
            actualizarCarrusel();
        });
    });

    actualizarCarrusel();
});