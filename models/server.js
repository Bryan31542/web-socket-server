const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.paths = {};

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Sockets
    this.sockets();
  }

  middlewares() {
    // Cors
    this.app.use(cors());

    // Public folder
    this.app.use(express.static("public"));
  }

  routes() {}

  sockets() {
    this.io.on("connection", (socket) => {
      console.log("Client connected", socket.id);

      socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
