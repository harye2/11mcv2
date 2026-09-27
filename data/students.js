const STUDENTS = [
    "Jose Acosta", "Anderson Aparicio", "Maria Barrientos", "Luis Bohorquez",
    "Jeremyns Bustamante", "Laura Cobos", "Andres Cogollo", "Alexa Coronado",
    "Daneysy Daza", "Julieta Doncel", "Matias Garcia", "Juan Genes",
    "Abraham Gomez", "Taliana Gutierrez", "Camilo Herazo", "Maria Hernandez",
    "Karel Jaramillo", "Eylin Jaramillo", "Matias Lopez", "Jose Lopez",
    "Sara Machado", "Santiago Marquez", "Ronald Martinez", "Luisa Mercado",
    "Jonatan Mora", "Kevin Peñate", "Kevin Pertuz", "Stephanie Pupo",
    "Vanesa Ramirez", "Santiago Riascos", "Martin Rodriguez", "Catalina Rojas",
    "Luis Saenz", "Daniel Sanchez", "Eliana Sepulveda", "Karol Sepulveda",
    "Jornary Suarez", "Leidis Turizo", "Juan Valencia"
];
function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
