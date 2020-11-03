let connection;


const handleUserInput = function(data) {
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