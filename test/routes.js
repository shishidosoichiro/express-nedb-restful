var expect = require('chai').expect;
var express = require('express');
var Routes = require('../routes');

var equal = function(expected){
	return function(result){
		expect(expected).to.be.equal(result)
		return this;
	}
}
var assign = function(src, dest){
	for (var key in src) dest[key] = src[key];
		return dest;
}
var Test = function(options){
	var test = function(){
		Routes(test).find(test, test);
	};
	assign(options, test);
	test.find = function(params, callback){
		expect(params).to.be.equal(this.params);
		callback.apply(this, this.result)
	};
	return test;
}

describe('express-nedb-restful', function(){
	describe('routes.js', function(){
		describe('#find', function(){
			it('should call "find" method of store.', function(){
				var options = {
					params: {a: 'b'},
					result: [null, {c: 'd'}]
				};
				Test(assign(options, {
					json: equal(options.result[1])
				}))();
			});
			it('should return 500 status when a store returns err object.', function(){
				var options = {
					params: {a: 'b'},
					result: [{message: 'error'}]
				};
				Test(assign(options, {
					json: equal(options.result[0]),
					status: equal(500)
				}))();
			});
		});
	});
});