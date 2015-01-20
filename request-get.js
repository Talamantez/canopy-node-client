var request = require('request');

request.get(
    'http://www.sandbox.canopy.link/api/device/9fcd9f2e-9955-439e-b05d-3a8171676661',
,
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
);