var express = require('express');
var Routes = require('./routes');

module.exports = exports = function(store){
	var routes = Routes(store);
	return express.Router()
	.get('/', routes.find)
	.get('/:id', routes.findOne)
	.post('/', routes.insert)
	.put('/:id', routes.update);
};
