import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { init } from "./lib/socketio";
import { ObjectId } from "mongoose";
import { connect } from "./lib/database";
import api from "./routes";
import cors from "cors";

//For env File
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      customData: string;
      id: ObjectId;
    }
  }
}

const app: Application = express();
const port = process.env.PORT || 8000;
const server = require("http").createServer(app);

app.use(express.json());

app.use(cors());
connect();

app.use("/api/", api);

server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

init(server);
