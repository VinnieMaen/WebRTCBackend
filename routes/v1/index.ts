import express, { Express, Request, Response } from "express";

import calls from "./calls";

const router = express.Router();

router.use("/calls/", calls);

export default router;
