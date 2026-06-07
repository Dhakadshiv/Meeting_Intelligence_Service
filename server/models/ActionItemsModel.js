const mongoose = require("mongoose");

const actionItemSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true
    },

    assignee: {
      type: String,
      required: true
    },
     assigneeEmail: {
        type: String,
        required: true
    },
    reminderSent: {
    type: Boolean,
    default: false
    },
    status: {
      type: String,
      enum: ["PENDING", "IN_PROGRESS", "COMPLETED"],
      default: "PENDING"
    },
     dueDate: {
      type: Date,
      required: true
    },
    meetingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meeting",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "ActionItem",
  actionItemSchema
);