import express, { Express, Request, Response } from "express";

import User from "../../models/User";
import generateToken from "../../lib/generateAccesstoken";

export default async function startCall(req: Request, res: Response) {
  try {
    const user = await User.findOne({ name: req.body.name.toLowerCase() });
    if (user)
      return res.status(403).json({
        success: false,
        message: "User with this name already exists!",
      });

    const newUser = new User({
      name: req.body.name.toLowerCase(),
      status: null,
      available: true,
      sdpData: JSON.stringify(req.body.sdpData),
      candidates: JSON.parse(req.body.candidates),
      socketID: null,
      createdAt: new Date(),
    });

    const savedUser = await newUser.save();

    const accessToken = await generateToken(savedUser._id);

    res.setHeader("authorization", "Bearer " + accessToken);
    return res.status(201).json({
      success: true,
      message: "Call and User Created!",
      data: {
        accessToken,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
}
