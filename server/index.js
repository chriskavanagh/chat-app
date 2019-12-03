const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const router = require("./router");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connect", socket => {
  console.log("New Connection");

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("User Has Left Room");
  });
});

app.use(cors());
app.use(router);

server.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
