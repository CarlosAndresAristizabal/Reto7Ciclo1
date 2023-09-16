/** @format */

const nombre = 'Carlos Andres';
const años = 35;

console.log(
	`Hola mundo!, mi nombre es ${nombre} y tengo ${años} de edad y estoy aprendiendo TypeScript`
);

// Tipos de variables

const numero: number = 5;
const cadena: string = 'TypeScript';
const esVerdad: boolean = true;
const arregloNumeros: number[] = [1, 2, 3];
const objeto: { nombre: string; edad: number } = { nombre: 'Ornito', edad: 30 };

// Enumeraciones para representar diferentes valores
enum DiaSemanas {
	Lunes,
	Martes,
	Miércoles,
	Jueves,
	Viernes,
	Sábado,
	Domingo,
}
const dia: DiaSemanas = DiaSemanas.Martes;

// Tipos any y unknown en diferentes situaciones
let variableAny: any = 'Hola';
variableAny = 5;
const variableUnknown: unknown = 10;
if (typeof variableUnknown === 'number') {
	const suma = variableUnknown + 5;
}

// Tipos de unión e intersección en diferentes situaciones
type NumeroOTexto = number | string;
type Persona = { nombre: string; edad: number };
type Empleado = Persona & { puesto: string };

const valor: NumeroOTexto = 20;
const persona: Persona = { nombre: 'María', edad: 28 };
const empleado: Empleado = { nombre: 'Carlos', edad: 35, puesto: 'Desarrollador' };

// Tipos de colección en diferentes situaciones
const numeros: number[] = [1, 2, 3, 4, 5];
const nombres: Array<string> = ['Maria', 'Juan', 'MAribeth'];

// Función que utiliza varios conceptos
function datos(data: any) {
	if (typeof data === 'number' || typeof data === 'string') {
		console.log('Dato:', data);
	} else if (typeof data === 'object') {
		if ('nombre' in data && 'edad' in data) {
			const { nombre, edad } = data as Persona;
			console.log('Persona:', nombre, 'Edad:', edad);
		} else if ('puesto' in data) {
			const { nombre, edad, puesto } = data as Empleado;
			console.log('Empleado:', nombre, 'Edad:', edad, 'Puesto:', puesto);
		}
	}
}

// Llamada a la función
datos(25);
datos('Hola');
datos({ nombre: 'Juan', edad: 30 });
datos({ nombre: 'Laura', edad: 28, puesto: 'Diseñadora' });
