// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función impar', function() {
  operaciones.esImpar.should.be.a.Function();
  should.equal(operaciones.esImpar(1), true);
  should.equal(operaciones.esImpar(2), false);
	should.equal(operaciones.esImpar(13), true);
	should.equal(operaciones.esImpar(130), false);
	should.equal(operaciones.esImpar(2023), true);
});



