function encontrarPalabraMasLarga(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ')

    let palabraMasLarga = '';
    
    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        if (words[i].length > palabraMasLarga.length) {
            palabraMasLarga = words[i];
        }
    }

    return palabraMasLarga;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(`La palabra más larga del texto "${text}" es: "${encontrarPalabraMasLarga(text)}"`); // Resultado esperado: "programación"