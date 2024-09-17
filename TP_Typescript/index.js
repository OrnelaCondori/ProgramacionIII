//Ejercicio 3 VARIABLES
console.log("Estoy trabajando en Typescript");
var myTexto = "Hola";
var myNumero = 42;
var myBoolean = true;
var myFecha = new Date();
function mostrarValores() {
    document.getElementById("stringElem").innerText += myTexto;
    document.getElementById("numberElem").innerText += myNumero.toString();
    document.getElementById("booleanElem").innerText += myBoolean.toString();
    document.getElementById("dateElem").innerText += myFecha.toString();
}
window.onload = mostrarValores;
//Ejercicio 4
var numeroTexto = 24;
function numString() {
    document.getElementById('numTexto').textContent += numeroTexto.toString();
}
document.addEventListener("DOMContentLoaded", numString);
//Ejercicio 5 ARRAYS
var numeros = [4, 21, 11];
var suma = 0;
numeros.forEach(function (a) {
    suma += a;
});
document.getElementById('arrayNumeros').textContent += suma.toString();
var estudiante = {
    nombre: 'Ornela Condorí',
    edad: 19,
    curso: 'Programacion 2'
};
function mostrarEstudiante() {
    var nombreElem = document.getElementById("nombre");
    var edadElem = document.getElementById("edad");
    var cursoElem = document.getElementById("curso");
    if (nombreElem && edadElem && cursoElem) {
        nombreElem.innerText += estudiante.nombre;
        edadElem.innerText += estudiante.edad.toString();
        cursoElem.innerText += estudiante.curso;
    }
}
window.onload = mostrarEstudiante;
var usuario = {
    nombre: 'Ornela',
    correo: 'ornela@gmail.com',
    saludar: function () {
        return "Buenas! Soy ".concat(this.nombre);
    }
};
function mostrarSaludo() {
    var saludoElem = document.getElementById("saludo");
    if (saludoElem) {
        saludoElem.innerText += usuario.saludar();
    }
}
window.onload = mostrarSaludo;
//Ejercicio 9 CLASES Y METODOS
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
var persona = new Persona('Ornela', 19);
function mostrarPresentacion() {
    var presentacionElem = document.getElementById("presentacion");
    if (presentacionElem) {
        presentacionElem.innerText = persona.presentarse();
    }
}
window.onload = mostrarPresentacion;
//Ejercicio 10 CLASE GENERICA
var Caja = /** @class */ (function () {
    function Caja(valor) {
        this.valor = valor;
    }
    Caja.prototype.obtenerValor = function () {
        return this.valor;
    };
    return Caja;
}());
var cajaString = new Caja('Hola Mundo');
var cajaNumber = new Caja(42);
function mostrarResultados() {
    var stringElem = document.getElementById("resultadoString");
    var numberElem = document.getElementById("resultadoNumber");
    if (stringElem && numberElem) {
        stringElem.innerText = "Valor almacenado (string): ".concat(cajaString.obtenerValor(), " - Tipo: ").concat(typeof cajaString.obtenerValor());
        numberElem.innerText = "Valor almacenado (number): ".concat(cajaNumber.obtenerValor(), " - Tipo: ").concat(typeof cajaNumber.obtenerValor());
    }
}
window.onload = mostrarResultados;
//Ejercicio 11
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Verde;
function mostrarColorFavorito() {
    var colorElem = document.getElementById("colorFavorito");
    if (colorElem) {
        colorElem.innerText = "Color favorito: ".concat(colorFavorito);
    }
}
window.onload = mostrarColorFavorito;
