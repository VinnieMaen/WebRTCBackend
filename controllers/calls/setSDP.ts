import express, { Express, Request, Response } from "express";

import User from "../../models/User";
import { ObjectId } from "mongodb";

export default async function setSDP(req: Request, res: Response) {
  try {
    const user: any = await User.findOneAndUpdate(
      {
        _id: res.locals.id,
      },
      {
        sdpData: JSON.stringify(req.body.sdp),
        candidates: req.body.candidates,
      }
    );

    return res.status(200).json({
      success: true,
      message: "SDP set!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
}
