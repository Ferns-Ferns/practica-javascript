// Codigo del Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado +" cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado+" cm");


function areaCuadrado(lado){
    return lado * lado;
} 
// console.log("El area del cuadrado es: " + areaCuadrado+" cm*2");
console.groupEnd();



// Codigo del Triangulo
console.group("Triangulo");
// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: " + ladoTriangulo +" cm, " + ladoTriangulo2 +" cm, "+ baseTriangulo + " cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo+" cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triangulo es: " + perimetroTriangulo+" cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
// console.log("El area del triangulo es: " + areaTriangulo+" cm*2");
console.groupEnd();



// Codigo del Circulo
console.group("Circulo");
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;


function diametroCirculo(radio){
    return radio * 2;
}

console.log("PI es: " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio)*PI;
}

console.groupEnd();

//Interaccion con HTML
//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const numero = input.value;

    const area = areaCuadrado(numero);
    alert(area);
}

//TRIANGULO
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const l1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const l2 = Number(input2.value);
    const inputb = document.getElementById("InputTriangulob");
    const b = Number(inputb.value);
    
    const perimetro = perimetroTriangulo(l1, l2, b);
    alert(perimetro);
}


function calcularAreaTriangulo(){
    const inputb = document.getElementById("InputTriangulob");
    const b = Number(inputb.value);
    const inputa = document.getElementById("InputTrianguloa");
    const a = Number(inputa.value);
    
    const area = areaTriangulo(b, a);
    alert(area);
}


//CIRCULO

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const area = areaCirculo(radio);
    alert(area);
}