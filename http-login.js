var http = require('http');

var credentials = {
  "username": '9fcd9f2e-9955-439e-b05d-3a8171676661',
  "password": 'ddkgPG1jqntzhf8lJagVOoZvcc+mMOl8'
}

var credentialsString = JSON.stringify(credentials);

var credentialsHeaders = {
  'Content-Type': 'application/json',
  'Content-Length': credentialsString.length
};

var credentialsOptions = {
  host: 'sandbox.canopy.link',
  port: 80,
  path: '/api/login',
  method: 'POST',
  headers: credentialsHeaders
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
  console.log('error: ' + e);
});

loginReq.write(credentialsString);
loginReq.end();