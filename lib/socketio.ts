import User from "../models/User";

let io: any;
const { Server } = require("socket.io");

export function init(server: any) {
  io = new Server(server, { cors: { origin: "*" } });

  io.on("disconnect", (socket: any) => {
    console.log(socket.id + " disconnected!");
  });

  io.on("connection", async (socket: any) => {
    if (!socket.handshake.query.id) return;
    await User.findOneAndUpdate(
      { _id: socket.handshake.query.id },
      { $set: { socketID: socket.id } }
    );

    //socket.disconnect(0);
    //socket.disconnect(1);

    socket.on("newConnection", async (data: any) => {
      const user = await User.findById(data.id);
      console.log(user?.name);
      io.to(user?.socketID).emit("createConnection", data);
    });

    socket.on("newCallCreated", async (data: any) => {
      socket.broadcast.emit("newCall", data);
    });
  });
}
