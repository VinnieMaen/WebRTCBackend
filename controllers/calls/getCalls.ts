import express, { Express, Request, Response } from "express";

import User from "../../models/User";
import { ObjectId } from "mongodb";

export default async function getCalls(req: Request, res: Response) {
  try {
    const users = await User.find({
      _id: { $ne: new ObjectId(res.locals.id) },
      available: true,
    });

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    error;
    res.status(500).json({
      success: false,
    });
  }
}
