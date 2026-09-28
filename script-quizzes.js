document.addEventListener('DOMContentLoaded', () => {
    const preguntas = [
        {
            pregunta: "En Homecoming, ¿cómo se llama el profesor de la escuela de decatlón académico que acompaña a los chicos a Washington D.C.?",
            opciones: ["El Director Morita", "El Sr. Harrington", "El Sr. Cobbwell", "El entrenador Wilson"],
            correcta: 1
        },
        {
            pregunta: "Durante el atraco al cajero automático en Homecoming, los ladrones llevan máscaras de qué personajes de Marvel clásica:",
            opciones: ["Los 4 Fantásticos", "Los Vengadores originales (Iron Man, Thor, Hulk, Capitán América)", "Los Defensores", "Los X-Men"],
            correcta: 1
        },
        {
            pregunta: 'En Far From Home, ¿en qué ciudad europea se enfrentan por primera vez Spider-Man y el supuesto "Elemental de Agua"?',
            opciones: ["Venecia", "Praga", "Londres", "Berlín"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es el nombre del club escolar o equipo en el que participan Peter, MJ y Ned en la escuela secundaria (Midtown High)?",
            opciones: ["El club de robótica avanzada", "El equipo de ciencias y decatlón académico", "El periódico escolar The Daily Bugle estudiantil", "El club de periodismo audiovisual"],
            correcta: 1
        },
        {
            pregunta: "En No Way Home, cuando Ned abre los portales mágicos con el anillo de Doctor Strange buscando a Peter Parker, ¿con qué dos variantes de Peter se encuentra primero antes de dar con el 'nuestro'?",
            opciones: ["Con Tobey Maguire y Andrew Garfield", "Con Miles Morales y Spider-Gwen", "Con dos versiones animadas del personaje", "Con Peter Parker de 2012 y el de 2002"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál es el nombre completo y real de la tía May en esta trilogía?",
            opciones: ["May Reilly-Parker", "May Parker-Stark", "Margaret 'May' Watson", "María Parker"],
            correcta: 0
        },
        {
            pregunta: "¿Qué frase icónica le dice el Duende Verde (Norman Osborn) a Peter justo antes de la muerte de la tía May en No Way Home?",
            opciones: ["'La fuerza no es un privilegio, es un poder.'", "'Los sueños no nos hacen quiénes somos.'", "'El poder de la patética ambición en la palma de mi mano.'", "'La lealtad es un precio muy alto que pagar.'"],
            correcta: 3
        },
        {
            pregunta: "En Far From Home, ¿cómo descubre MJ (Michelle Jones) que Peter es en realidad Spider-Man?",
            opciones: ["Le ve el traje en la mochila del colegio", "Encuentra un lanzatelarañas y une las piezas con la tarjeta de embarque de los lentes EDITH", "Peter se lo confiesa antes de ir a Europa", "Happy Hogan se lo revela por error"],
            correcta: 1
        },
        {
            pregunta: "En Far From Home, ¿cuál es el nombre falso o la coartada que usa Nick Fury para reclutar a Peter y llevarlo a la misión en Europa (que Peter intenta evitar a toda costa)?",
            opciones: ['"Night Monkey" (El mono nocturno)', '"The European Spy"', '"Spider-Man Stealth"', "Peter no usa ningún disfraz ni coartada, viaja como turista común"],
            correcta: 0
        },
        {
            pregunta: "En el laboratorio de la escuela de MJ, cuando las tres versiones de Peter se ponen a planear cómo curar a los villanos, ¿qué apodo o nombre abreviado usa el Peter de Tom Holland para referirse cariñosamente a Tobey Maguire?",
            opciones: ["Peter 2", "El abuelo Peter", "Peter Original", "Spider-Man Clásico"],
            correcta: 0
        }
    ];

    let indicePreguntaActual = 0;
    let respuestaSeleccionada = null;
    let respuestasCorrectasTotales = 0;

    // Elementos del DOM
    const textoPregunta = document.getElementById('texto-pregunta');
    const botonesRespuesta = document.querySelectorAll('.boton-respuesta');
    const botonEnviar = document.getElementById('boton-enviar');
    const barraProgresoInterna = document.getElementById('barra-progreso-interna');
    const contadorProgreso = document.getElementById('contador-progreso');
    const modalResultado = document.getElementById('modal-resultado');
    const textoResultadoFinal = document.getElementById('texto-resultado-final');
    const botonReiniciar = document.getElementById('boton-reiniciar');

    function cargarPregunta() {
        respuestaSeleccionada = null;
        const actual = preguntas[indicePreguntaActual];
        
        textoPregunta.textContent = actual.pregunta;
        botonesRespuesta.forEach((boton, index) => {
            boton.textContent = actual.opciones[index];
            boton.classList.remove('seleccionada');
        });

        const progresoPorcentaje = ((indicePreguntaActual + 1) / preguntas.length) * 100;
        barraProgresoInterna.style.width = `${progresoPorcentaje}%`;
        contadorProgreso.textContent = `${indicePreguntaActual + 1}/${preguntas.length}`;
    }

    botonesRespuesta.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesRespuesta.forEach(b => b.classList.remove('seleccionada'));
            boton.classList.add('seleccionada');
            respuestaSeleccionada = parseInt(boton.getAttribute('data-index'));
        });
    });

    botonEnviar.addEventListener('click', () => {
        if (respuestaSeleccionada === null) {
            alert("Por favor, selecciona una respuesta antes de continuar.");
            return;
        }

        if (respuestaSeleccionada === preguntas[indicePreguntaActual].correcta) {
            respuestasCorrectasTotales++;
        }

        indicePreguntaActual++;

        if (indicePreguntaActual < preguntas.length) {
            cargarPregunta();
        } else {
            textoResultadoFinal.textContent = `Has respondido correctamente ${respuestasCorrectasTotales} de ${preguntas.length} preguntas.`;
            modalResultado.classList.remove('oculto');
        }
    });

    botonReiniciar.addEventListener('click', () => {
        indicePreguntaActual = 0;
        respuestasCorrectasTotales = 0;
        modalResultado.classList.add('oculto');
        cargarPregunta();
    });

    cargarPregunta();
});