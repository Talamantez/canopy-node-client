var http = require('http');

// credentials and payload

var credentials = {
  "username": '9fcd9f2e-9955-439e-b05d-3a8171676661',
  "password": 'ddkgPG1jqntzhf8lJagVOoZvcc+mMOl8'
}

var payload = {
  "sddl": { "out float32 beta_waves" : {},
      },
  "vars": {
          "beta_waves": 4.5
          }
};

// stringify credentials and payload

var credentialsString = JSON.stringify(credentials);
var payloadString = JSON.stringify(payload);

// define credentials and payload headers
var credentialsHeaders = {
  'Content-Type': 'application/json',
  'Content-Length': credentialsString.length
};
var payloadHeaders = {
  'Content-Type': 'application/json',
  'Content-Length': payloadString.length
};

// define credentials and payload http options
var credentialsOptions = {
  host: 'sandbox.canopy.link',
  port: 80,
  path: '/api/login',
  method: 'POST',
  headers: credentialsHeaders
};
var payloadOptions = {
  host: 'sandbox.canopy.link',
  port: 80,
  path: '/api/device/9fcd9f2e-9955-439e-b05d-3a8171676661',
  method: 'POST',
  headers: payloadHeaders
};

// Setup the Login request.
var loginReq = http.request(credentialsOptions, function(res) {
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

loginReq.on('error', function(e) {
  // TODO: handle error.
  console.log('login error: ' + e);
});

// Setup the post request.
var payloadReq = http.request(payloadOptions, function(res) {
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

payloadReq.on('error', function(e) {
  // TODO: handle error.
  console.log('post error: ' + e);
});

//Compose the requests
loginReq.write(credentialsString, function(err){
    if(!err){
      payloadReq.write(payloadString);
      payloadReq.end();
    }
});
loginReq.end();