import express, { Request, Response } from "express";

import jwt from "jsonwebtoken";
import fs from "fs";
import User from "../models/User";

export default async function (req: Request, res: Response, next: Function) {
  const cert = fs.readFileSync("cert.pem");
  try {
    if (!req.headers.authorization)
      return res
        .status(403)
        .json({ success: false, message: ["Invalid Access Token!"] });

    let accessToken = req.headers.authorization.split("Bearer ")[1];
    jwt.verify(accessToken, cert, async function (err: any, decoded: any) {
      if (!decoded)
        return res
          .status(403)
          .json({ success: false, message: ["Invalid Access Token!"] });

      let user = await User.findById(decoded.sub);
      if (!user)
        return res.status(404).json({
          success: false,
          message: ["User not found!"],
        });

      if (decoded.exp < Date.now()) {
        return res.status(403).json({
          success: false,
          message: ["Session Expired!"],
        });
      }

      res.locals.id = decoded.sub;

      next();
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}
