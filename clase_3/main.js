const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// filter() para obtener los productos que cuesten menos de $100.
const productosBaratos = productos.filter((producto) => {
    return producto.precio < 100;
});
console.log("1. Filtro (< $100):", productosBaratos);

// sort() para ordenar esos productos alfabéticamente por su nombre.
const productosOrdenados = productosBaratos.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
});

console.log("2. Ordenados (A-Z):", productosOrdenados);

// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const soloNombres = productosOrdenados.map((producto) => {
    return producto.nombre;
});

console.log("3. Solo nombres:", soloNombres);