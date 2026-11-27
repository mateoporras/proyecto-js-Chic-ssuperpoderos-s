function buscarLibros(lista, texto) {
    const buscado = texto.trim().toLowerCase();
    if (buscado === "") {
    return lista;
}
return lista.filter(function (libro) {
    return (
        libro.titulo.toLowerCase().includes(buscado) ||
        libro.autor.toLowerCase().includes(buscado)
    );
});
}

function filtrarPorCategoria(lista, categoria) {
    if (categoria === "") {
    return lista;
}
    return lista.filter(function (libro) {
        return libro.categoria === categoria;
});
}

function filtrarDisponibles(lista) {
    return lista.filter(function (libro) {
        return libro.disponible === true;
});
}

function ordenarPorTitulo(lista) { 
    return lista.slice().sort(function (a, b) {
        return a.titulo.localeCompare(b.titulo);
});
}

function contarPorCategoria(lista, categoria) {
    return lista
    .filter(function (libro) {
        return libro.categoria === categoria;
    })
    .reduce(function (total) {
        return total + 1;
    }, 0);
}