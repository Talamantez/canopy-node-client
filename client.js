'use strict'
var http = require('http');
var extend = require('extend');
var typeCheck = require('type-check');
var validate = require('./validate-settings');

var Client = function(settings){
	this.init = function(){
		var defaultSettings = {
			
			"auth-username": null,
			"auth-password": null,
			"auth-device-id": null,
			"auth-device-secret": null,
			"auth-type": "basic",
			"server" : "sandbox.canopy.link",
			"http-port": 8080,
			"https-port": 443,
			"use-https": true 
		}

		var mySettings = {};
		extend(false, mySettings, defaultSettings, settings);
		
		// validate settings
				
		var defaultSettings
		}
	this.id = function(id) {
				this.id = id
		}

	this.auth = function(authString) {
			var myAuthString = new Buffer(authString).toString("base64");
			this.auth = 'Basic ' + myAuthString;
		}

	this.set = function(param, value) {
			console.log('Posting data to device: '+ this.id);
			var sddlType = "out float32 " + param;
			console.log('sddlType: ');
			console.dir(sddlType);
			var payload = {
				"sddl": {},
				"vars": {}
			};
			payload.sddl[sddlType] = {};
			payload.vars[param] = value;
			console.log('payload: ')
			console.dir(payload);
			var payloadString = JSON.stringify(payload);

			var headers = {
				'Content-Type' 	 : 'application/json',
				'Content-Length' : payloadString.length,
				'Authorization'  : this.auth
			}

			var options = {
				host: 'sandbox.canopy.link',
				port: 80,
				path: '/api/device/' + this.id,
				method: 'POST',
				headers: headers
			}

			var req = http.request(options, function(res) {
			  console.log(options);
			  console.log('res.setEncoding');
			  res.setEncoding('utf-8');

			  var responseString = '';

			  res.on('data', function(data) {
			    responseString += data;
			    console.log('responseString: ' + responseString);
			  });

			  res.on('end', function() {
			    var resultObject = JSON.parse(responseString);
			  });
			});

			req.on('error', function(e) {
			  // TODO: handle error
			  console.log('error: ' + e);
			});

			req.write(payloadString);
			req.end();			

					},
	this.get = function() {

			console.log('Getting data for device: '+this.id);
			var options = {
			  host: 'sandbox.canopy.link',
			  path: '/api/device/' + this.id
			};

			callback = function(response) {
			  var str = '';

			  response.on('data', function (chunk) {
			    str += chunk;
			  });

			  response.on('end', function () {
			    console.log(str);
			  });
			}

			http.request(options, callback).end();			
		}		

}



module.exports = new Client();
