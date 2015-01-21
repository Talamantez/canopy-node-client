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

## Set a Canopy cloud variable

*  Get the <b>Device Id</b> and <b>Secret Key</b> from the web dashboard
(select the device, this will update the card on the right, choose the <b>Details</b> option on the card's menu bar.

* From the project's root directory, enter <b>node</b> to drop into the node repl

* Type:
```
    var canopy = require(process.cwd()+'/canopy');

    var myDevice = canopy.Device;

    myDevice.id('your device id');

    myDevice.auth('your device id:your device secret key');

    myDevice.set('your cloud var', value);

```

* Get the device state to check to see that the value has updated with:

```
	myDevice.get();
```
