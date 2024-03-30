const http = require("node:http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
