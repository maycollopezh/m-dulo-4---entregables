const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

// TODO Técnica de los dos punteros
function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        if (arr[inicio].charAt(0) === arr[siguiente].charAt(0)) {
            return [arr[inicio], arr[siguiente]]
        } else {
            inicio++;
            siguiente++;
        }
    }
    return [-1, -1];
}

console.log("Primera Forma (2 Punteros):");

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]

let resultado = encontrarPareja(invitados);
if (resultado[0] == -1) {
    console.log("No se pudo encontrar");
} else {
    console.log(`Los invitados que coinciden en la primera letra de su nombre son: "${resultado[0]}" y "${resultado[1]}"`);
}




// TODO Segunda forma
function encontrarParejaSegundaForma(array) {
    for (let i = 0; i < array.length; i++) {
    const primerNombre = array[i];
    const segundoNombre = array[i + 1];
        if (primerNombre.charAt(0) === segundoNombre.charAt(0)) {
            return console.log(`Los invitados que coinciden en la primera letra de su nombre son: "${primerNombre}" y "${segundoNombre}"`);
        } 
    }
}

console.log("Segunda Forma:");
encontrarParejaSegundaForma(invitados)