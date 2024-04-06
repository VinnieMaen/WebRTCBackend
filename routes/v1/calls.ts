import express, { Express, Request, Response } from "express";

import jwtAuth from "../../middleware/jwtAuth";
import startCall from "../../controllers/calls/startCall";
import removeCall from "../../controllers/calls/removeCall";

const router = express.Router();

router.post("/create", startCall);
router.delete("/", jwtAuth, removeCall);
router.get("/", (req, res) => {
  res.send("JFDIOJDIMO");
});

export default router;
