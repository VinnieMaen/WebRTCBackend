import express, { Express, Request, Response } from "express";

import User from "../../models/User";
import { ObjectId } from "mongodb";

export default async function getCallData(req: Request, res: Response) {
  try {
    const user: any = await User.find({
      _id: { $ne: new ObjectId(req.params.id) },
      available: true,
    });

    return res.status(200).json({
      success: true,
      data: {
        callData: {
          sdp: user.sdpData,
          candidates: user.candidates,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
}
