console.log("Sesion JS01");

//Son 7 datos primitivos:
//String : "Hola"
console.log("Tipo de dato Strnig: ", "Hola");

//Number: 12, -45, 367.12, +Infinity, -Infinity, NaN
//Los numericos usan 64 bitspara almacenar, pero solo se usan 53 bits para representar el numero.
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor maximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

//BigInt
//Sirve para representar valores numericos enteros, de los que el tipo numbre no puede representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER +1);
console.log("MAX_SAFE_INTEGER + 2: ", Number.MAX_SAFE_INTEGER +2);
let myBigInt = 9007199254740991n; //se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 1n);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 2n);

///Boolean
//Tenemos solo 2 estados:true/false
console.log("Tipo de dato bolean: ", true);
console.log("Tipo de dato bolean: ", false);

//Undefined
//U dato que es declarado,pero no definido en el tipo
let myVar; //Solo se declara
console.log("Tipo de dato undefined: ", myVar);

//null
//Intensionalmente se borra el tipo de dato
let myVarNell;//solo se declara
console.log("Tipo de dato myVarNull: ", typeof myVarNull);//undefined
myVarNull = "Saludos Sr.PP"; //se asigna un dato String
console.log("Tipo de dato myVarNull: ", typeof myVarNull);//string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof myVarNull);//object


//Symbol
//Crea propiedades privadas en los objetos
//------------------------------------------------------------
//Tipos de datos Object
//Object:
const misDatos = {
    //clave: valor
    nombre: "Fatima",
    apellido: "Moreno",
    edad: 23,
    isBelico: false,
    musicaPreferidaPorGenero: {
        rock: "La celula que explota",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto:function fullName(){
        return misDatos.nombre +" "+ misDatos.apellido + ",soy la belicona";
    }
}
console.log("Datos completos: ", misDatos);
console.log("Nombre: ", misDatos.nombre);
console.log("Musica de fin de semana: ", misDatos.musicaPreferidaPorGenero.corridosTumbados);
console.log("Nombre completo: ", misDatos.nombreCompleto());

//Array
//Almacena diferentes tipos de datos, su primer elemento indice 0

const cancionesPP = [
    "Soy ek Belicon",
    "El azul",
    "El tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

console.log("Cancion con color: ", cancionesPP[1]);
console.log("Canciones hechas en el año 2020-2021", cancionesPP[4].total );
console.log("Canciones hechas en el año 2020-2021", cancionesPP[4]["total"] );
console.log("Canciones hechas en el año 2020-2021", cancionesPP[4][2021] );
console.log("Canciones hechas en el año 2020-2021", cancionesPP[4]["2021"] );

console.log("Num total de elementos: ", cancionesPP.length);
console.log("Contiene la cancion AMG: ", cancionesPP.indexOf("AMG")>-1);


//-----------------------------------------------------------------------------
//Conversion de datos
const myNumber = 420; //minutos en la sesion JS01
console.log("Numero. minutos en la sesion: " + myNumber);
//toString
const myNumberTxt = String(myNumber);
console.log("Numero. minutos en la sesion: " + myNumberTxt);

//toNumber
const myString = "420";
//500

//toParseInt
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de sumatoria: " + sumatoriaEntera);

//toBoolean
const isBelicoso = "false"
console.log(typeof isBelicoso);
console.log(Boolean (isBelicoso));

if( isBelicoso === "false" )
    console.log("Denle su belikin");
else
    console.log("Abra paso a la barredora");

//Boolean
//para que sea False, debe ser: " ", 0, null, undefined
//Number
//[] = 0, [30] = 30, [3,1] = NaN, false = 0, true = 1
//String 
//[]= " ", [1,2] = "1,2", function(){}, {} = [object Object]
