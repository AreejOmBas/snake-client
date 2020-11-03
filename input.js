let connection;
const { KEYS } = require('./constants');

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else {
    if(KEYS.hasOwnProperty(data)){
      console.log(KEYS[data])
      connection.write(KEYS[data])

    }
  }
  
}


/* const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w'){
    connection.write('Move: up');
  } else if (data === 'a'){
    connection.write('Move: left');
  } else if (data === 'd'){
    connection.write('Move: right');
  } else if (data === 's'){
    connection.write('Move: down');
  } else if (data === 'q'){
    connection.write('Say: Beat you');
  } else if (data === 'f'){
    connection.write('Say: FUN :D');
  } else if (data === 'e'){
    connection.write('Say: LOL');
  } 
} */



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