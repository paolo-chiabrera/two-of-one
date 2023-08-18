// Use process.env.PORT to get the port number
const port = process.env.PORT || 3000;

// Load json-server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
