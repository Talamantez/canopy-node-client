# canopy-node-client
Canopy client for Node.js

## Create a Canopy account
* Go to <b>www.canopy.link</b>
* In the top right corner of the window, click <b>Log In</b>
* Complete the information under <b>Sign Up</b>

## Create a Device

* Go to <b>www.canopy.link</b>
* In the top right corner of the window, click <b>Log In</b>
* In the bottom left corner of the dashboad, click <b>Create Devices</b>
* Enter the device name and click <b>Create Devices</b>

## Set a Canopy cloud variable from Node REPL

*  Get the <b>Device Id</b> and <b>Secret Key</b> from the web dashboard
(select the device, this will update the card on the right, choose the <b>Details</b> option on the card's menu bar.

* cd into your project, then install the canopy client:
```
	npm install canopy-node-client --save
```
* In the termial type 'node' to drop into the REPL, then type:
```

    var canopy = require('canopy-node-client');

    var myDevice = canopy.Device;

    myDevice.id('your device id');

    myDevice.auth('your device id:your device secret key');

    myDevice.set('your cloud var', value);

```

* Get the device state to check to see that the value has updated with:

```
	myDevice.get();
```

### Set a Canopy cloud variable via example script

*  Get the <b>Device Id</b> and <b>Secret Key</b> from the web dashboard
(select the device, this will update the card on the right, choose the <b>Details</b> option on the card's menu bar.


*  cd into your project, then install the canopy client:
```
	npm install canopy-node-client --save
```

*  cd into node_modules/canopy-node-client/example

*  open update.js and fill in your <b>Device Id</b> and <b>Secret Key</b> where directed in the file.

*  Save the file

*  In the terminal, type
```
	node update 'my_cloud_varible' value
	(i.e. node update 'sensor_reading' 12374)
``` 
