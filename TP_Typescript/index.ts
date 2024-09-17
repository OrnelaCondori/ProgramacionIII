//Ejercicio 3 VARIABLES
console.log("Estoy trabajando en Typescript")
const myTexto: string = "Hola";
const myNumero: number = 42;
const myBoolean: boolean = true;
const myFecha: Date = new Date();  
function mostrarValores() {
    document.getElementById("stringElem")!.innerText += myTexto;
    document.getElementById("numberElem")!.innerText += myNumero.toString();
    document.getElementById("booleanElem")!.innerText += myBoolean.toString();
    document.getElementById("dateElem")!.innerText += myFecha.toString();
}
window.onload = mostrarValores;
//Ejercicio 4
const numeroTexto : number = 24;
function numString(){
    (document.getElementById('numTexto') as HTMLElement).textContent += numeroTexto.toString();
}
document.addEventListener("DOMContentLoaded",numString);
//Ejercicio 5 ARRAYS
const numeros:number[]=[4,21,11];
let suma:number = 0 ;
numeros.forEach(function(a:number){
    suma +=a; 
});
(document.getElementById('arrayNumeros') as HTMLElement).textContent += suma.toString();
//Ejercicio 6 OBJETOS
interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
}
const estudiante: Estudiante ={
    nombre:'Ornela Condorí',
    edad:19,
    curso:'Programacion 2'
}
function mostrarEstudiante() {
    const nombreElem = document.getElementById("nombre");
    const edadElem = document.getElementById("edad");
    const cursoElem = document.getElementById("curso");

    if (nombreElem && edadElem && cursoElem) {
        nombreElem.innerText += estudiante.nombre;
        edadElem.innerText += estudiante.edad.toString();
        cursoElem.innerText += estudiante.curso;
    }
}
window.onload = mostrarEstudiante;
//Ejercicio 8 CLASES Y METODOS
interface Usuario {
    nombre: string;
    correo: string;
    saludar: () => string; 
}
const usuario: Usuario = {
    nombre: 'Ornela',
    correo: 'ornela@gmail.com',
    saludar: function () {
        return `Buenas! Soy ${this.nombre}`;
    }
};
function mostrarSaludo() {
    const saludoElem = document.getElementById("saludo");
    if (saludoElem) {
        saludoElem.innerText += usuario.saludar();
    }
}
window.onload = mostrarSaludo;
//Ejercicio 9 CLASES Y METODOS
class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona = new Persona('Ornela', 19);
function mostrarPresentacion() {
    const presentacionElem = document.getElementById("presentacion");
    if (presentacionElem) {
        presentacionElem.innerText = persona.presentarse();
    }
}
window.onload = mostrarPresentacion;
//Ejercicio 10 CLASE GENERICA
class Caja<T> {
    private valor: T;
    constructor(valor: T) {
        this.valor = valor;
    }
    obtenerValor(): T {
        return this.valor;
    }
}
const cajaString = new Caja<string>('Hola Mundo');
const cajaNumber = new Caja<number>(42);
function mostrarResultados() {
    const stringElem = document.getElementById("resultadoString");
    const numberElem = document.getElementById("resultadoNumber");

    if (stringElem && numberElem) {
        stringElem.innerText = `Valor almacenado (string): ${cajaString.obtenerValor()} - Tipo: ${typeof cajaString.obtenerValor()}`;
        numberElem.innerText = `Valor almacenado (number): ${cajaNumber.obtenerValor()} - Tipo: ${typeof cajaNumber.obtenerValor()}`;
    }
}
window.onload = mostrarResultados;

//Ejercicio 11
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}
let colorFavorito: Color = Color.Verde;
function mostrarColorFavorito() {
    const colorElem = document.getElementById("colorFavorito");
    if (colorElem) {
        colorElem.innerText = `Color favorito: ${colorFavorito}`;
    }
}
window.onload = mostrarColorFavorito;

