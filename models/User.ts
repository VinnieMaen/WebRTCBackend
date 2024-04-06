import mongoose, { Model, Schema } from "mongoose";

interface Candidate {
  candidate: string;
  sdpMLineIndex: number;
  sdpMid: string;
  usernameFragment: string;
}

interface User extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  status: string;
  available: boolean;
  sdpData: string;
  candidates: object;
  socketID: string;
  createdAt: number;
}

const iceCandidateSchema = new mongoose.Schema({
  candidate: {
    type: String,
    required: true,
  },
  sdpMLineIndex: {
    type: Number,
    required: true,
  },
  sdpMid: {
    type: String,
    required: true,
  },
  usernameFragment: {
    type: String,
    required: true,
  },
});

const userSchema: Schema<User> = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    available: {
      type: Boolean,
      require: true,
    },
    sdpData: {
      type: String,
      required: true,
    },
    candidates: [
      {
        type: iceCandidateSchema,
        required: true,
      },
    ],
    socketID: {
      type: String,
      require: false,
    },
    createdAt: {
      type: Number,
      require: true,
    },
  },
  { collection: "Users", minimize: false }
);

const User: Model<User> = mongoose.model<User>("Users", userSchema);
export default User;
