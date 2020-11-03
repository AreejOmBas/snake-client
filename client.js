const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //handel data comming from the server
  conn.on('data', (input) => {
    console.log(input);
  });

  return conn;
}

console.log('Connecting ...');


module.exports = {
  connect

};