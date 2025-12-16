let alumnos = ["angela", "maycol", "melani", "rodrigo", "sara", "marcelo"];
console.log(alumnos);

for (let i = 0; i < alumnos.length; i++) {
    letraMayuscula = alumnos[i].charAt(0).toUpperCase()
    alumnos[i] = (`${letraMayuscula}${alumnos[i].substring(1)}`);
}

console.log(alumnos);