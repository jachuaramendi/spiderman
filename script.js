document.addEventListener('DOMContentLoaded', () => {
    const botonSiguiente = document.getElementById('boton-siguiente-momento');
    const botonAnterior = document.getElementById('boton-anterior-momento');
    const pistaCarrusel = document.getElementById('pista-carrusel');
    
    const cantidadDesplazamiento = 350;

    botonSiguiente.addEventListener('click', () => {
        pistaCarrusel.scrollBy({
            left: cantidadDesplazamiento,
            behavior: 'smooth'
        });
    });

    botonAnterior.addEventListener('click', () => {
        pistaCarrusel.scrollBy({
            left: -cantidadDesplazamiento,
            behavior: 'smooth'
        });
    });
});