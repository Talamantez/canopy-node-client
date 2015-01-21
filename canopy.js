// canopy.device(ID).set("beta_waves", 4.5);
var http = require('http');
var Device = function () {
	this.id = function(id){
			this.id = id
	}
	this.auth = function(authString){
			//9fcd9f2e-9955-439e-b05d-3a8171676661:ddkgPG1jqntzhf8lJagVOoZvcc+mMOl8			
			var myAuthString = new Buffer(authString).toString("base64");
			this.auth = 'Basic ' + myAuthString;
		}
	this.set = function(param, value){
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
/*			var payload = {
			    "sddl": { "out float32 beta_waves" : {},
			        },
			    "vars": {
			            "beta_waves": value
			            }				
			}*/
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
	this.get = function(){
			console.log('Getting data for device: '+this.id);
			var options = {
			  host: 'sandbox.canopy.link',
			  path: '/api/device/' + this.id
			};

			callback = function(response) {
			  var str = '';

			  //another chunk of data has been recieved, so append it to `str`
			  response.on('data', function (chunk) {
			    str += chunk;
			  });

			  //the whole response has been recieved, so we just print it out here
			  response.on('end', function () {
			    console.log(str);
			  });
			}

			http.request(options, callback).end();			
		}

				

}
module.exports.Device = new Device();

/*var myDevice = new canopy.Device();
myDevice.id(1234);*/