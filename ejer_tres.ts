let arreglo:String[]=["Nelson","Mauricio","Navarro", "Zaraza"];

for(let valores of arreglo)[
    console.log("Valor: " + valores)
]

for(let valores in arreglo)[
    console.log("Posicion: "+ valores)
]

for(var val=0; val<arreglo.length; val++){
    let valoresArreglo = arreglo[val];
    console.log(valoresArreglo)
}

arreglo.forEach((valoresFor)=>console.log(valoresFor))