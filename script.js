// Definición de todos los cursos organizados por ciclos con sus respectivos requisitos
const ciclos = {
    "Ciclo 1": [
        { nombre: "Análisis Matemático I", requisitos: [] },
        { nombre: "Ecología General", requisitos: [] },
        { nombre: "Introducción a la Agronomía", requisitos: [] },
        { nombre: "Química General", requisitos: [] },
        { nombre: "Sociedad y Cultura Peruana", requisitos: [] }
    ],
    "Ciclo 2": [
        { nombre: "Análisis Matemático II", requisitos: ["Análisis Matemático I"] },
        { nombre: "Biología General", requisitos: [] },
        { nombre: "Economía General", requisitos: [] },
        { nombre: "Física General", requisitos: ["Análisis Matemático I"] },
        { nombre: "Lenguaje y Comunicación", requisitos: [] },
        { nombre: "Perú en el Contexto Internacional", requisitos: ["Sociedad y Cultura Peruana"] },
        { nombre: "Química Orgánica", requisitos: ["Química General"] }
    ],
    "Ciclo 3": [
        { nombre: "Bioquímica", requisitos: ["Química Orgánica"] },
        { nombre: "Botánica General", requisitos: ["Biología General"] },
        { nombre: "Dibujo General", requisitos: [] },
        { nombre: "Estadística General", requisitos: ["Análisis Matemático II"] },
        { nombre: "Prácticas Agronómicas I", requisitos: ["Introducción a la Agronomía"] },
        { nombre: "Redacción y Argumentación", requisitos: ["Lenguaje y Comunicación"] },
        { nombre: "Zootecnia General", requisitos: ["Biología General"] }
    ],
    "Ciclo 4": [
        { nombre: "Edafología", requisitos: ["Química General"] },
        { nombre: "Etica y Ciudadania", requisitos: [] },
        { nombre: "Fisiología Vegetal", requisitos: ["Botánica General", "Bioquímica"] },
        { nombre: "Mecanización Agrícola I", requisitos: ["Física General"] },
        { nombre: "Metodología de la Investigación", requisitos: ["Estadística General"] },
        { nombre: "Sistemática Agrícola", requisitos: ["Botánica General"] }
    ],
    "Ciclo 5": [
        { nombre: "Agrotecnia", requisitos: ["Edafología", "Fisiología Vegetal", "Mecanización Agrícola I"] },
        { nombre: "Entomología General", requisitos: ["Biología General"] },
        { nombre: "Fitopatología General", requisitos: ["Fisiología Vegetal"] },
        { nombre: "Meteorología General", requisitos: ["Física General"] },
        { nombre: "Principios de Propagación de Plantas", requisitos: ["Fisiología Vegetal"] },
        { nombre: "Topografía I", requisitos: ["Dibujo General"] }
    ],
    "Ciclo 6": [
        { nombre: "Agroecología", requisitos: ["Agrotecnia", "Meteorología General"] },
        { nombre: "Fertilidad del Suelo", requisitos: ["Agrotecnia"] },
        { nombre: "Fitogenética", requisitos: ["Fisiología Vegetal", "Estadística General"] },
        { nombre: "Manejo de Malezas", requisitos: ["Agrotecnia", "Principios de Propagación de Plantas"] },
        { nombre: "Métodos Estadísticos para la Investigación", requisitos: ["Metodología de la Investigación"] },
        { nombre: "Principios de Manejo Integrado de Plagas", requisitos: ["Entomología General"] }
    ],
    "Ciclo 7": [
        { nombre: "Fitomejoramiento General", requisitos: ["Fitogenética"] },
        { nombre: "Fruticultura General", requisitos: ["Principios de Propagación de Plantas", "Agrotecnia"] },
        { nombre: "Manejo y Control de Semillas", requisitos: ["Fisiología Vegetal"] },
        { nombre: "Olericultura General", requisitos: ["Principios de Propagación de Plantas", "Agrotecnia"] },
        { nombre: "Cultivos I", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] }
    ],
    "Ciclo 8": [
        { nombre: "Entomología Agrícola", requisitos: ["Principios de Manejo Integrado de Plagas"] },
        { nombre: "Fitopatología Agrícola", requisitos: ["Fitopatología General"] },
        { nombre: "Fundamentos del Riego", requisitos: ["Fertilidad del Suelo"] },
        { nombre: "Gestión Agrícola I", requisitos: ["Economía General"] },
        { nombre: "Seminario en Ciencias Agronomía I", requisitos: ["Métodos Estadísticos para la Investigación"] },
        { nombre: "Cultivos II", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] }
    ],
    "Ciclo 9": [
        { nombre: "Extensión y Promoción Agraria", requisitos: ["Agrotecnia"] },
        { nombre: "Fisiología y Manejo Post Cosecha", requisitos: ["Fruticultura General", "Olericultura General"] },
        { nombre: "Manejo y Conservación del Suelo", requisitos: ["Fertilidad del Suelo", "Topografía I"] },
        { nombre: "Gestión Agrícola II", requisitos: ["Gestión Agrícola I"] },
        { nombre: "Seminario en Ciencias Agronómica II", requisitos: ["Seminario en Ciencias Agronomía I"] },
        { nombre: "Cultivos III", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] }
    ],
    "Ciclo 10": [
        { nombre: "Cultivos IV", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] },
        { nombre: "Gestión Agrícola III", requisitos: ["Gestión Agrícola II"] },
        { nombre: "Prácticas Agronómicas II", requisitos: ["Prácticas Agronómicas I"] },
        { nombre: "Trabajo de Investigación", requisitos: ["Entomología General", "Fitopatología General", "Fertilidad del Suelo"] },
        { nombre: "Curso Electivo de Carrera", requisitos: [] }
    ]
};

// Estado de aprobación de cursos
const estadoCursos = {};

// Renderiza la malla curricular completa
function renderMalla() {
    const contenedor = document.getElementById('malla');
    contenedor.innerHTML = '';

    for (const [nombreCiclo, cursos] of Object.entries(ciclos)) {
        const columna = document.createElement('div');
        columna.className = 'ciclo';

        const tituloCiclo = document.createElement('h2');
        tituloCiclo.textContent = nombreCiclo;
        columna.appendChild(tituloCiclo);

        cursos.forEach(curso => {
            const aprobado = estadoCursos[curso.nombre] || false;
            const requisitosCumplidos = curso.requisitos.every(req => estadoCursos[req]);

            const divCurso = document.createElement('div');
            divCurso.className = 'curso';
            if (aprobado) divCurso.classList.add('aprobado');
            if (!requisitosCumplidos && curso.requisitos.length > 0 && !aprobado) divCurso.classList.add('bloqueado');

            const nombre = document.createElement('div');
            nombre.className = 'nombre';
            nombre.textContent = curso.nombre;

            const boton = document.createElement('button');
            boton.textContent = aprobado ? "Aprobado" : "Aprobar";
            boton.disabled = !requisitosCumplidos && !aprobado;
            boton.onclick = () => {
                estadoCursos[curso.nombre] = true;
                renderMalla();
            };

            divCurso.appendChild(nombre);
            divCurso.appendChild(boton);
            columna.appendChild(divCurso);
        });

        contenedor.appendChild(columna);
    }
}

// Ejecutar al cargar
renderMalla();
