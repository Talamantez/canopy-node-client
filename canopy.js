var http = require('http');
var extend = require('extend');
var typeCheck = require('type-check');
 

var Client = function(settings) {
};

var initClient = function(settings) {
	// set defaults
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
	validateSettings(mySettings);


	return new Client(mySettings);
}

var validateSettings = function(settings) {
	if (settings["auth-username"] && settings["auth-device-id"]) {
		throw new Error('Please choose either auth-username or auth-device-id, not both, thanks.');
	}

	if (settings["auth-username"]) {
		if (!typeCheck('String', settings["auth-username"])) {
			throw new Error('Expected string for auth-username');
		};
		if (!typeCheck('String', settings["auth-password"])) {
			throw new Error('Expected string for auth-password');
		};
	} else if (settings["auth-device-id"]) {	
		if (!typeCheck('String', settings["auth-device-id"])) {
			throw new Error('Expected string for auth-device-id');
		};
		if (!typeCheck('String', settings["auth-device-secret"])) {
			throw new Error('Expected string for auth-device-secret');
		};	
	} else {
		throw new Error('Must provide either auth-username or auth-device-id')
	}
	if (settings["auth-type"] !== "basic") {
		throw new Error('Expected string "basic" for auth-type');
	};	
	if (!typeCheck('String', settings["server"])) {
		throw new Error('Expected string for server');
	};
	if (!typeCheck('Number', settings["http-port"])) {
		throw new Error('Expected number for http-port');
	};
	if (!typeCheck('Number', settings["https-port"])) {
		throw new Error('Expected number for https-port');
	};
	if (!typeCheck('String', settings["auth-username"])) {
		throw new Error('Expected string for auth-username');
	};	

}

var Device = function () {

// get historical cloud data for time series 'get time series' or 'get historic'
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

module.exports.Device = new Device();

module.exports.initClient = initClient;