"use strict";
/** @format */
const nombre = 'Carlos Andres';
const años = 35;
console.log(`Hola mundo!, mi nombre es ${nombre} y tengo ${años} de edad y estoy aprendiendo TypeScript`);
// Tipos de variables
const numero = 5;
const cadena = 'TypeScript';
const esVerdad = true;
const arregloNumeros = [1, 2, 3];
const objeto = { nombre: 'Ornito', edad: 30 };
// Enumeraciones para representar diferentes valores
var DiaSemanas;
(function (DiaSemanas) {
    DiaSemanas[DiaSemanas["Lunes"] = 0] = "Lunes";
    DiaSemanas[DiaSemanas["Martes"] = 1] = "Martes";
    DiaSemanas[DiaSemanas["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiaSemanas[DiaSemanas["Jueves"] = 3] = "Jueves";
    DiaSemanas[DiaSemanas["Viernes"] = 4] = "Viernes";
    DiaSemanas[DiaSemanas["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaSemanas[DiaSemanas["Domingo"] = 6] = "Domingo";
})(DiaSemanas || (DiaSemanas = {}));
const dia = DiaSemanas.Martes;
// Tipos any y unknown en diferentes situaciones
let variableAny = 'Hola';
variableAny = 5;
const variableUnknown = 10;
if (typeof variableUnknown === 'number') {
    const suma = variableUnknown + 5;
}
const valor = 20;
const persona = { nombre: 'María', edad: 28 };
const empleado = { nombre: 'Carlos', edad: 35, puesto: 'Desarrollador' };
// Tipos de colección en diferentes situaciones
const numeros = [1, 2, 3, 4, 5];
const nombres = ['Maria', 'Juan', 'MAribeth'];
// Función que utiliza varios conceptos
function datos(data) {
    if (typeof data === 'number' || typeof data === 'string') {
        console.log('Dato:', data);
    }
    else if (typeof data === 'object') {
        if ('nombre' in data && 'edad' in data) {
            const { nombre, edad } = data;
            console.log('Persona:', nombre, 'Edad:', edad);
        }
        else if ('puesto' in data) {
            const { nombre, edad, puesto } = data;
            console.log('Empleado:', nombre, 'Edad:', edad, 'Puesto:', puesto);
        }
    }
}
// Llamada a la función
datos(25);
datos('Hola');
datos({ nombre: 'Juan', edad: 30 });
datos({ nombre: 'Laura', edad: 28, puesto: 'Diseñadora' });
