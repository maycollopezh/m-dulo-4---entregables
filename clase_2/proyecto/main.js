const listaDeCompras = [];

const agregarProducto = (productoAAgregar) => {
    if (listaDeCompras.includes(productoAAgregar)) {
        console.log(`El producto ${productoAAgregar} ya existe`);
    } else {
        listaDeCompras.push(productoAAgregar)
        console.log(`Producto "${productoAAgregar}" agregado`);
    }
}

const eliminarProducto = (productoAEliminar) => {
    const indiceProducto = listaDeCompras.findIndex((valor) => {return valor === productoAEliminar})
    if (indiceProducto !== -1) {
        listaDeCompras.splice(indiceProducto, 1);
        console.log(`El producto "${productoAEliminar}" ha sido eliminado`);
    } else {
        console.log(`El producto "${productoAEliminar}" no existe`);
    }
}

const mostrarLista = () => {
    console.log(`
-----------------------
    Lista de Compras
----------------------- `);
    
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacia");
    } else {
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        })
    }
    console.log("-----------------------");
}

//PRUEBA DEL PROYECTO
    //Agregando productos
agregarProducto("Manzana");
agregarProducto("Cereal");
agregarProducto("Arina");
agregarProducto("Arroz");
    // Intentamos agregar algo que ya existe
agregarProducto("Arroz");
mostrarLista();

    //Eliminar productos
eliminarProducto("Cereal")
    // Intentamos eliminar algo que no existe
eliminarProducto("Zanahoria")
mostrarLista();