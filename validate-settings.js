'use strict'

module.exports = function(settings){
    if (settings["auth-username"] && settings["auth-device-id"]) {
        throw new Error('Please choose either auth-username or auth-device-id, not both, thanks.');
      }
      if (settings["auth-username"]) {
        if (!typeCheck('String', settings["auth-username"])) {
          throw new Error('Expected string for auth-username');
        };
        if (!typeCheck('String', settings["auth-password"])) {
          throw new Error('Expected string for auth-password');
        };
      } else if (settings["auth-device-id"]) {  
        if (!typeCheck('String', settings["auth-device-id"])) {
          throw new Error('Expected string for auth-device-id');
        };
        if (!typeCheck('String', settings["auth-device-secret"])) {
          throw new Error('Expected string for auth-device-secret');
        };  
      } else {
        throw new Error('Must provide either auth-username or auth-device-id');
      }
      if (settings["auth-type"] !== "basic") {
        throw new Error('Expected string "basic" for auth-type');
      };  
      if (!typeCheck('String', settings["server"])) {
        throw new Error('Expected string for server');
      
      if (!typeCheck('Number', settings["http-port"])) {
        throw new Error('Expected number for http-port');
      };
      if (!typeCheck('Number', settings["https-port"])) {
        throw new Error('Expected number for https-port');
      };

    }

}

































// /*var typeCheck = require('type-check');
// module.exports = new Switch();

// var Switch = function(){
//   switch (settings) {
    
//            /*
           
//                 Switch Header throws errors for both the mutual existence
//                 or non-existence of "auth-username" && "auth-device-id",
//                 allowing only cases with only one of these parameters to continue.

//            */

//             case "auth-username" && "auth-device-id":
//                 throw new error('Please choose either auth-username or auth-device-id, not both, thanks.');
           
//             case !("auth-username" && "auth-device-id"):
//                  throw new Error('Must provide either auth-username or auth-device-id');
            
//            /*
//                 ...then type-checks the handle and auth
//            */
            
//             case "auth-username":
//                   typeCheckAuth("auth-username", "auth-password");
            
//             case "auth-device-id":
//                   typeCheckAuth("auth-device-id", "auth-device-secret");
//             /*
//                 check for authtype 'basic';
//             */

//             case !("auth-type"=== "basic"):
//                    throw new Error ('Expected string "basic" for auth-type');
            
//             case !(typeCheck("String", settings["server"]):
//                    throw new Error ('Expected string "basic');
//             case !(typeCheck("Number", settings["http-port"])):
//                    throw new Error('Expected number for http-port');

//             case !(typeCheck("Number", settings["https-port"])):
//                    throw new Error('Expected number for https-port');
//             case !(typeCheck("String", settings["auth-username"]):
//                    throw new Error('Expected string for auth-username');          


//             default:
//                 console.log('Please pick a number from 0 to 6!');
//         }

//         function typeCheckAuth( handle, auth ){

//                 if( typeCheckString( handle ) ){
//                             typeCheckString( auth );
//                       }
//         }

//         function typeCheckServer(testValueName){
                
//                    typeCheckString(testValueName)

//                     // Add additional validation to match a valid server name
//                }


//         function typeCheckString(testValueName){
                
//                    if ( !typeCheck('String', settings[ testValueName ]) ) {
//                         throw new Error('Expected string for ' + testValueName);
//                     };
//                }
//         function typeCheckNumber(testValueName){
                
//                    if ( !typeCheck('Number', settings[ testValueName ]) ) {
//                         throw new Error('Expected Number for ' + testValueName);
//                     };
//                }
// }
// */
