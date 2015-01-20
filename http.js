var http = require('http');
var payload = {
  "sddl": { "out float32 beta_waves" : {},
			},
  "vars": {
	        "beta_waves": 4.5
	   	    }
};

var payloadString = JSON.stringify(payload);

var headers = {
  'Content-Type': 'application/json',
  'Content-Length': payloadString.length
};

var options = {
  host: 'sandbox.canopy.link',
  port: 80,
  path: '/api/device/9fcd9f2e-9955-439e-b05d-3a8171676661',
  method: 'POST',
  headers: headers
};

var req = http.request(options, function(res) {
  res.setEncoding('utf-8');

  var responseString = '';

  res.on('data', function(data) {
    responseString += data;
  });

  res.on('end', function() {
    var resultObject = JSON.parse(responseString);
  });
});

req.write(payloadString);
req.end();