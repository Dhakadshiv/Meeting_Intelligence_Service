const mongoose = require("mongoose");

const transcriptSchema = new mongoose.Schema(
  {
    timestamp: {
      type: String,
      required: true,
    },

    speaker: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const meetingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    participants: [
      {
        type: String,
        required: true,
      },
    ],

    meetingDate: {
      type: Date,
      required: true,
    },

    transcript: [transcriptSchema],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Meeting", meetingSchema);