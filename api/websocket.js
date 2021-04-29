const webSocketServer = require("websocket").server;
const http = require("http");
const PORT = 8000;

// Spin up the http server and the websocket server.
const server = http.createServer();
server.listen(PORT);
console.log("Server started at port " + PORT);
const wsServer = new webSocketServer({
  httpServer: server,
});

const connectedClients = {};

// Generate unique UID for each connected client
function getGUID() {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
}

// Send a test object and log it on the console
function sendRandomData(userID) {
  const timeStamp = Math.round((Date.now() / 10000) % 100);
  const hosts = [
    "paypol.com",
    "microsoft.co",
    "hdm-stuttgart.de",
    "example.com",
  ];
  const number = Math.floor(Math.random() * 4);
  for (let key in connectedClients) {
    connectedClients[key].send(
      JSON.stringify({
        timeStamp,
        host: hosts[number],
      })
    );
    console.log(
      JSON.stringify({
        timeStamp,
        host: hosts[number],
      })
    );
  }
}

// Listen for connections and start sending. Abord when connection is closed
wsServer.on("request", function (request) {
  var userID = getGUID();
  const connection = request.accept(null, request.origin); //Accept only allowed origin
  connectedClients[userID] = connection;
  console.log(connection);

  console.log(`\n${new Date()}:`);
  console.log(`Recieved a new connection from origin + ${request.origin}.`);
  console.log(
    `- id: ${userID} in ${Object.getOwnPropertyNames(connectedClients)}\n`
  );

  const mutationSimulation = setInterval(() => {
    sendRandomData(userID);
  }, 800);

  connection.on("close", function () {
    console.log("Connection closed: " + userID);
    clearInterval(mutationSimulation);
    delete connectedClients[userID];
  });
});
