var expect = require('chai').expect;
var express = require('express');
var Routes = require('../routes');

describe('express-nedb-restful', function(){
	describe('routes.js', function(){
		describe('#find', function(){
			var equal = function(expected){
				return function(result){
					expect(expected).to.be.equal(result)
					return this;
				}
			}
			var Test = function(options){
				var test = function(){
					Routes(test).find(test, test);
				};
				for (var key in options) test[key] = options[key];
				test.find = function(params, callback){
					expect(params).to.be.equal(this.params);
					callback.apply(this, this.result)
				};
				return test;
			}
			it('should call "find" method of store.', function(){
				var options = {
					params: {a: 'b'},
					result: [null, {c: 'd'}]
				};
				Test({
					params: options.params,
					result: options.result,
					json: equal(options.result[1])
				})();
			});
			it('should return 500 status when a store returns err object.', Test({
				params: {},
				result: [{message: 'error'}],
				json: equal({message: 'error'}),
				status: equal(500)
			}));
		});
	});
});