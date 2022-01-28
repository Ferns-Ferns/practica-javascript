//Helpers
function esPar(numero){
    return  (numero % 2 === 0);
 };
 
 //Calculadora de mediana
 function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

//Mediana General
const salariosGuate = guatemala.map(
    function(persona){
        return persona.salary;
    }
);

const salariosGuateSorted = salariosGuate.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


const medianaGeneralGuate = medianaSalarios(salariosGuateSorted);

//Mediana del top 10%
const spliceStart = (salariosGuateSorted.length * 90)/100;
const spliceCount = salariosGuateSorted.length - spliceStart;

const salariosGuateTop10 = salariosGuateSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Guate = medianaSalarios(salariosGuateTop10);


console.log({
    medianaGeneralGuate,
    medianaTop10Guate,
});