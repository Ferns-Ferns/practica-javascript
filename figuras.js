// Codigo del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();



// Codigo del Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

function alturaTriangulo(lado1, lado2, base){
     if (lado1 === lado2){
        return Math.sqrt(lado1**2 - (base**2)/4);
     }else{
        alert("Los lados del triangulo deben ser iguales para calcular la altura");
    } 
}
console.groupEnd();




// Codigo del Circulo
console.group("Circulo");
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

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

function calcularAlturaIsosceles(){
    const input1 = document.getElementById("InputTriangulo1");
    const l1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const l2 = Number(input2.value);
    const inputb = document.getElementById("InputTriangulob");
    const b = Number(inputb.value);

    const altura = alturaTriangulo(l1, l2, b);
    alert(altura);
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