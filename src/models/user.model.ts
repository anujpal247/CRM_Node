import { Schema, model, Types } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  clientEmail: string;
  userType: string;
  userStatus: string;
  ticketsCreated: [Types.ObjectId];
  ticketsAssigned: [Types.ObjectId];
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /\S+@\S+\.\S+/,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      default: "customer",
      enum: ["customer", "admin", "engineer"],
    },
    userStatus: {
      type: String,
      required: true,
      default: "approved",
      enum: ["approved", "suspended", "rejected"],
    },
    ticketsCreated: {
      type: [Schema.Types.ObjectId],
      ref: "Ticket",
    },
    ticketsAssigned: {
      type: [Schema.Types.ObjectId],
      ref: "Ticket",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
