/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function suma (a, b) {
	return a - b;	
};

var esPar = function esPar (a) {
	return ( a % 2 ) == 0;	
};

/* Función impar */
var esImpar = function esImpar (a) {
	return (a % 2) == 1;	
};


/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	esPar,
	esImpar
}

