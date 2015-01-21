var canopy = require('..');

/* 

	Retrieve your Device Id & Secret Key from canopy.link after
	creating an account and device 
	Then fill in the info below.

	Then you can run the following

		node update 'my_cloud_variable' numericVal

		( i.e. node update 'sensor_reading' 38273 )

*/

var myDevice = canopy.Device;

/*
	>>>>>>> Enter your Canopy Device Id below

	(i.e. myDevice.id('128314rh934thgf4942')  )
*/

// myDevice.id('Your Device Id');
myDevice.id('9fcd9f2e-9955-439e-b05d-3a8171676661');

/*
	>>>>>> Enter your Canopy Device Id & Secret Key below, 
	separated by a colon(':')

	(i.e. myDevice.auth('232f3h8023f43h80:fh3802h49t02')  )
*/

// myDevice.auth('Your Device Id:Your Secret Key');
myDevice.auth('9fcd9f2e-9955-439e-b05d-3a8171676661:ddkgPG1jqntzhf8lJagVOoZvcc+mMOl8');

myDevice.set(process.argv[2], process.argv[3], function(callback){
	callback();
});