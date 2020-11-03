let connection;
const { KEYS } = require('./constants');

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else {
    if(KEYS.hasOwnProperty(data)) {
      connection.write(KEYS[data]);
    }
  }
}


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',function(key){
    handleUserInput(key);
  });
  return stdin;
}



module.exports = {
  setupInput
}