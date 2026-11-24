# BiblioEscolar — Gestión de Préstamos de Biblioteca

## Equipo
- Mateo Porras Jiménez · [@mateoporras](https://github.com/mateoporras)
- Andrés Callejas Jiménez · [@ProbablyWasted](https://github.com/ProbablyWasted)
- Dayana Marulanda · [@dmarulandaecheverry-ship-it](https://github.com/dmarulandaecheverry-ship-it)

## El problema
Las bibliotecas escolares suelen llevar el control de libros, estudiantes y préstamos de forma manual o desorganizada, lo que dificulta saber qué ejemplares están disponibles y quién tiene entregas pendientes. Esta aplicación web resuelve ese problema brindando al encargado de la biblioteca una herramienta rápida y centralizada para gestionar el inventario bibliográfico, registrar préstamos y detectar devoluciones vencidas sin perder trazabilidad.

## Funcionalidades
1. **Registro y gestión de libros:** Permite agregar nuevos libros al catálogo con su información básica (título, autor, categoría y estado de disponibilidad).
2. **Registro de usuarios:** Permite dar de alta a los estudiantes o docentes autorizados para solicitar préstamos en la biblioteca.
3. **Control de préstamos y devoluciones:** Asocia un libro disponible a un usuario con fecha de salida y fecha límite de entrega, actualizando el estado del ejemplar al devolverse.
4. **Buscador de catálogo:** Permite localizar rápidamente libros por título o autor dentro del inventario.
5. **Consulta de disponibilidad y préstamos vencidos:** Visualiza de forma filtrada qué libros están libres para prestar y cuáles tienen la fecha de devolución vencida.

## Datos que se guardan en localStorage
- `libros`: Arreglo de objetos con la información de cada ejemplar (`id`, `titulo`, `autor`, `disponible`).
- `usuarios`: Arreglo de objetos con los datos de los lectores registrados (`id`, `nombre`, `grado` o `documento`).
- `prestamos`: Arreglo de objetos que vinculan libros y usuarios (`id`, `libroId`, `usuarioId`, `fechaPrestamo`, `fechaDevolucion`, `devuelto`).

## Búsqueda, filtro u orden
- **Buscar libro (`filter` / `find`):** Se utilizará `.filter()` para buscar libros en tiempo real por coincidencias en el título o autor, y `.find()` para seleccionar un libro o usuario específico por su `id` al registrar o devolver un préstamo.
- **Filtrar libros disponibles (`filter`):** Se aplicará `.filter(libro => libro.disponible === true)` para mostrar únicamente los ejemplares listos para prestar.
- **Filtrar préstamos vencidos (`filter`):** Se empleará `.filter()` comparando la `fechaDevolucion` contra la fecha actual (`new Date()`) en préstamos que aún no han sido devueltos.
- **Ordenar catálogo o vencimientos (`sort`):** Se usará `.sort()` para ordenar los libros alfabéticamente por título o los préstamos por fecha límite de entrega más próxima.

## Boceto
*Pendiente por subir.*

## Reparto de tareas
| Integrante | Se encarga de |
|---|---|
| Mateo Porras Jiménez | Por definir |
| Andrés Callejas Jiménez | Por definir |
| Dayana Marulanda | Por definir |
