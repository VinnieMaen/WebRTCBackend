import express, { Express, Request, Response } from "express";

import User from "../../models/User";
import { ObjectId } from "mongodb";

export default async function removeCall(req: Request, res: Response) {
  try {
    const user = await User.findOneAndDelete({
      _id: new ObjectId(res.locals.id),
    });

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User does not exist!",
      });

    return res.status(200).json({
      success: true,
      message: "Call Data cleaned up!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
}
