'use strict'

var client = require('../client');

console.dir(client);
var myClient = client.init({
			"auth-username": 'banana',
			"auth-password": 'tacos'
		});
console.log("client auth-username");
console.dir(myClient;
