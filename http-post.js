var http = require('http');
// variable
var myAuthString = new Buffer("9fcd9f2e-9955-439e-b05d-3a8171676661:ddkgPG1jqntzhf8lJagVOoZvcc+mMOl8").toString("base64");
var myAuth = 'Basic ' + myAuthString;

var payload = {
// full of variables - hard code for now
    "sddl": { "out float32 beta_waves" : {} },
    "vars": { "beta_waves": 123455.9 }
};

var payloadString = JSON.stringify(payload);

var headers = {
  'Content-Type'   : 'application/json',
  'Content-Length' : payloadString.length,
  'Authorization'  : myAuth
};

var options = {
  host: 'sandbox.canopy.link',
  port: 80,
  // variable
  path: '/api/device/9fcd9f2e-9955-439e-b05d-3a8171676661',
  method: 'POST',
  headers: headers 
};

// Setup the request.  The options parameter is
// the object we defined above.
var req = http.request(options, function(res) {
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
  // TODO: handle error.
  console.log('error: ' + e);
});

req.write(payloadString);
req.end();