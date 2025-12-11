// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje

const registrarDestino = (destino, fecha, transporte) => {
    let nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte),
    }
    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    // Costo base por destino
    let costoBase = 0;
    if (destino === "Paris") costoBase = 500;
    else if (destino === "Londres") costoBase = 400;
    else if (destino === "New York") costoBase = 600;

    if (transporte === "Avión") costoBase += 200;
    else if (transporte === "Tren") costoBase += 100;
    
    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: ${viaje.costo}`);
        console.log("---------------------------");
    }
}

// Iniciar la aplicación
const iniciarApp = () => {
    registrarDestino ("Paris", "2025-05-15", "Tren");
    registrarDestino ("New York", "2025-05-20", "Avión");

    mostrarItinerario();
}

iniciarApp();