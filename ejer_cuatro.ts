function parImpar(numero:number):number{
    return numero%2;
}

let texto:String=parImpar(2)==0 ? "Par" : "Impar";
console.log(texto)