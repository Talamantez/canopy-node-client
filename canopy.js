// canopy.device(ID).set("beta_waves", 4.5);

var device = {
		id: function(id){
			this.id = id
		},
		set: function(param, value){
			Object.defineProperty(this, param, {
			    value: value,
			    writable: true,
			    enumerable: true,
			    configurable: true
			});
		},
		auth: function(authString){
			var authString = new Buffer(authString);
			this.auth = 'Basic ' + authString; 
		}
		httpPost: function(){
			this.host = 'sandbox.canopy.link',
			this.port = 80,
			this.path = '/api/device/' + this.id
		}
	}

module.exports.device = device;

/*var myDevice = new canopy.Device();
myDevice.id(1234);*/