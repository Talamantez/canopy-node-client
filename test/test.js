var assert = require('chai').assert;
var expect = require('chai').expect;
var chai = require('chai');
var http = require('http');
var canopy = require('../canopy');


// Test initClient


suite("init", function(){

	var humanClient = {
			"auth-username": 'banana',
			"auth-password": 'tacos'
		}

	test("Initialize Client with empty settings should fail", function(){
	  	expect(function() {
	  		canopy.initClient({});
	  	}).to.throw(Error);
	});
	test("Initialize Client with humanClient settings should not fail", function(){
	  	expect( function() {
	  		canopy.initClient(
	  			humanClient
			);
	  	}).to.not.throw(Error);
	
	});
});