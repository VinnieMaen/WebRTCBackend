import express, { Express, Request, Response } from "express";

import User from "../../models/User";
import { ObjectId } from "mongodb";

export default async function setStatus(req: Request, res: Response) {
  try {
    const user: any = await User.findOneAndUpdate(
      {
        _id: res.locals.id,
      },
      {
        status: req.body.status,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Status set!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
}
