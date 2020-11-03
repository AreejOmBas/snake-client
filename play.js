// play.js
const { connect } = require('./client');

console.log('Connecting ...');

connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function(data){
  if (data === '\u0003') {
    process.write('you are exiting')
    process.exit();
  }


}
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.handleUserInput('data')
  return stdin;
}

console.log(setupInput);