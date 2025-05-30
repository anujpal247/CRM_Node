import { Schema, model } from "mongoose";

interface ITicket {
  title: string;
  description: string;
  ticketPriority: number;
  status: string;
  assignee: string;
  assignedTo: string;
  clientName: string;
  createdBy: string;
}

const ticketSchema = new Schema<ITicket>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ticketPriority: {
      type: Number,
      required: true,
      default: 4,
    },
    status: {
      type: String,
      required: true,
      default: "open",
      enum: ["open", "inProgress", "resolved", "onHold", "cancelled"],
    },
    assignee: {
      //email of the user who is assigning the ticket
      type: String,
    },
    assignedTo: {
      // email of the user to whom the ticket is assigned
      type: String,
    },
    clientName: {
      //  company's name by/for which this ticket is created
      type: String,
      required: true,
    },
    createdBy: {
      //  email of the user who created this ticket
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ticket = model("Ticket", ticketSchema);

export default Ticket;
