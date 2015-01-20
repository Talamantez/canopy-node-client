/*Step 1) Create an account on http://sandbox.canopy.link and create a device.

Step 2) Check out the REST API documentation here: http://canopy.link/devzone/restapi/.  It is incomplete, so don't hesitate to ask questions.

Step 3)

Try creating a cloud variable. Something like

var payload = {
    "sddl" : { "out float32 beta_waves" : {}},
    "vars" : { "beta_waves", 10000}
}

http.Request("POST", "http://sandbox.canopy.link/api/device/ID", payload);    

You should see the value if you refresh the page in the device manager.

Step 4)

Turn this into a function.  Something like:

canopy.device(ID).set("beta_waves", 4.5);

In particular, device(ID) will return a "device object" that has a "set" method.
*/
/*curl -c canopy.cookies -d '{ "username" : "leela", "password" : "P1anetExpre55" }' 
http://sandbox.canopy.link/api/login

*/

var http = require('http');
var querystring = require('querystring');
var payload = querystring.stringify({/*
    sddl : { "out float32 beta_waves" : {}},
    "vars" : { "beta_waves": 4.5}*/
});

//http.Request("POST", "http://sandbox.canopy.link/api/device/ID", payload);   
var options = {
  hostname: 'sandbox.canopy.link',
  port: 80,
  path: '/api/device/9fcd9f2e-9955-439e-b05d-3a8171676661',
  headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(payload)
    }
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();