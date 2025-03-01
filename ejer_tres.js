console.log("------Ejercicio 3------");
var arreglo = ["Nelson", "Mauricio", "Navarro", "Zaraza"];
for (var _i = 0, arreglo_1 = arreglo; _i < arreglo_1.length; _i++) {
    var valores = arreglo_1[_i];
    [
        console.log("Valor: " + valores)
    ];
}
for (var valores in arreglo)
    [
        console.log("Posicion: " + valores)
    ];
for (var val = 0; val <= arreglo.length; val++) {
    var valoresArreglo = arreglo[val];
    console.log(valoresArreglo);
}
arreglo.forEach(function (valoresFor) { return console.log(valoresFor); });
