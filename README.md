# canopy-node-client
Canopy client for Node.js

## How to set a Canopy cloud variable

1) Get the 'Device Id' and 'Secret Key' from the web dashboard

2) Start a node prompt in the project's root directory

3) Type:

```
var canopy = require(process.cwd()+'/canopy');

var myDevice = canopy.Device;

myDevice.id('<your device id>');

myDevice.auth('<your device id> : <your device secret key>');

myDevice.set('<your cloud var>', value);

```

4) test it by getting the device:

```
myDevice.get();
```
