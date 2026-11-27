const CLAVE_LIBROS = "biblio-libros";
const CLAVE_USUARIOS = "biblio-usuarios";
const CLAVE_PRESTAMOS = "biblio-prestamos";

const categorias = [
    "Novela",
    "Cuento",
    "Poesía",
    "Ciencia",
    "Historia",
    "Infantil",
    "Texto escolar"
];

function cargar(clave) {
    try {
        return JSON.parse(localStorage.getItem(clave)) ?? [];
} catch (error) {
    return [];
}
}

function guardar(clave, lista) {
    localStorage.setItem(clave, JSON.stringify(lista));
}

let libros = cargar(CLAVE_LIBROS);
let usuarios = cargar(CLAVE_USUARIOS);
let prestamos = cargar(CLAVE_PRESTAMOS);