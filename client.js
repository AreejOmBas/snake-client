const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // print message as soon as connection is successful
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ABS');
    conn.write('"Move: up')
  });

  
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