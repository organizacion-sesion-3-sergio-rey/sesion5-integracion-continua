// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función par', function() {
  operaciones.esPar.should.be.a.Function();
  should.equal(operaciones.esPar(1), false);
  should.equal(operaciones.esPar(2), 1);
	should.equal(operaciones.esPar(13), 0);
	should.equal(operaciones.esPar(130), 1);
	should.equal(operaciones.esPar(2023), 0);
});



