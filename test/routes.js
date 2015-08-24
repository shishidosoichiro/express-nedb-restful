var expect = require('chai').expect;
var express = require('express');
var Routes = require('../routes');

describe('express-nedb-restful', function(){
	describe('routes.js', function(){
		describe('#find', function(){
			it('should call "find" method of store.', function(){
				var req = {
					params: {a:'b'}
				};
				var res = {
					json: function(json){
						expect(json.c).to.equal('d');
					}
				};
				var store = {
					find: function(conditions, callback){
						expect(conditions.a).to.be.equal(req.a);
						expect(callback).to.be.a('function');
						callback(null, {c:'d'})
					}
				};
				var routes = Routes(store);
				routes.find(req, res);
			});
		});
	});
});