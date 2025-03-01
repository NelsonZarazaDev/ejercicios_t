let saludo:String ="Hola, como estas?";
let entero:number=21;
let float:number=21.2;
let verdadero:boolean=true;
let falso:boolean=false;

let arra1:String[]=["Nelson","Mauricio"];
let arra2:Array<String> = ["Navarro","Zaraza"];

let arra3:number[]=[1,2,3,4,5];
let arra4:Array<number> = [6,7,8,9,10];

let arra5:(String|number)[]=["Nelson","Mauricio",1,2];
let arra6:Array<String|number> = ["Navarro","Zaraza",3,4];

console.log(saludo);
console.log(entero);
console.log(float);
console.log(verdadero);
console.log(falso);
console.log(arra1);
console.log(arra2);
console.log(arra3);
console.log(arra4);
console.log(arra5);
console.log(arra6);