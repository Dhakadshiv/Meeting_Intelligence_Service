const mongoose = require("mongoose");

const citationSchema = new mongoose.Schema(
  {
    timestamp: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const insightSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },

    citations: [citationSchema],
  },
  { _id: false }
);

const meetingAnalysisSchema = new mongoose.Schema(
  {
    meetingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meeting",
      required: true,
      unique: true,
    },

    summary: [insightSchema],

    decisions: [insightSchema],

    followUps: [insightSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "MeetingAnalysis",
  meetingAnalysisSchema
);