import express, { Express, Request, Response } from "express";

import jwtAuth from "../../middleware/jwtAuth";
import startCall from "../../controllers/calls/startCall";
import removeCall from "../../controllers/calls/removeCall";
import getCalls from "../../controllers/calls/getCalls";
import getCallData from "../../controllers/calls/getCallData";
import setSDP from "../../controllers/calls/setSDP";
import setStatus from "../../controllers/calls/setStatus";

const router = express.Router();

router.post("/create", startCall);
router.delete("/", jwtAuth, removeCall);
router.get("/", jwtAuth, getCalls);
router.get("/:id", jwtAuth, getCallData);
router.post("/sdp/", jwtAuth, setSDP);
router.post("/status/", jwtAuth, setStatus);

export default router;
