console.log("sesion JS02");

//----------Funcion declarada----
//function declaration, function statement
//Unacaracteristica es que las funciones declaradas tienen hoisting

//console.log("El resultado de 5 * 10 = " + multiplica(5,10));//invocando la funcion
multiplica(5,10);//invocando la funcion sin retorno
multiplica(8,8);
multiplica(-4,2);
 /*
 function nombreFuncionCamelCase (parametros){
    instrucciones;
 }
 */

 function multiplica(operandoA , operandoB){
    const resultado = operandoA * operandoB
    console.log(resultado);
 }

 function divide(dividendo, divisor){
    return dividendo/divisor;
 }
 console.log(divide(5,2));//2.5
 console.log(divide(5,"2"));//2.5
 console.log(divide("5","2"));//2.5
 console.log(divide("5 0","2"));//NaN


/*
 {//este es un bloque de codigo
    const operandoA = 5
    const operandoB = 10
    const resultado = operandoA * operandoB;
    console.log(resultado);
 }
 */

 //-------------Funciones expresadas-----------
 //Function expressions
 //Son declaradas dentro de la asignacion de una variable
 //Estas funciones pueden ser anonimas(no tienen nombre)
 //Las funciones expresadas no tienen hoisting, porque no se 
 //Carga en memoria hasta que se utilice

 /* Sintaxis

 const nombreVariable = function nombreFuncion(parametros){
    instrucciones;
 }
 */

const sum = function sumatoria(a, b){
    return a + b;
};

const resta = function (a, b){
    return a - b;
};
const potencia = function (a, b){
    return a ** b;
};
console.log(sum(9,9));//18
console.log(resta (90,20));//70

//----------------Funciones autoinvocadas--------------
//self-invoking functions
//Se autoinvocan, se puede definir con funciones anonimas

(function(){
    console.log("Me autoinvoco en la funcion");
}) ();

//-----------------Funciones Flecha-------------
//Arrow Function
//Son funciones similares a las funciones declaradas, pero no requieren la palabra function
//Si tiene una sola instruccion no requiere las {}
//Si la instruccion es el mismo retorno,no requiere la palabra return
/*
const areaRectangulo = function area (base, altura){
    return base*altura;
}*/
const areaRectangulo = (base, altura) => base * altura;
console.log("Area de Rectangulo 5*3: " +areaRectangulo(5,3));


//--------------Parametros default-------------
/**
 * Este comentario es la documentacion de la funcion 
 * @param {number} base esta es la descripcion de base
 * @param {number} altura esta es la descripcion de altura
 * @returns area del rectangulo
 */
const areaTriangulo = (base=1, altura=1) => base * altura / 2;

console.log("Area del triangulo b:5 a:10 = " +areaTriangulo(5,10));
console.log("Area del triangulo b:8 = " +areaTriangulo(8));
