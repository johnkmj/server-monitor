/*
	Console command extension for hubot. Now you can run console commands on your server
	via hubot! 
	Usage:
	Author: johnthedong
*/

var util   = require('util');
var exec  = require('childprocess').exec;
var child;

function runCommand(command){
    child = exec(command,
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('Error executing command: ' + error);
        }
    });
}

