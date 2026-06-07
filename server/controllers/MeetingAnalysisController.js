const Meeting = require("../models/MeetingsModel");
const ai = require("../config_gemini/gemini");

const analyzeMeeting = async (req, res) => {
    try {

        const meeting = await Meeting.findById(req.params.id);

        if (!meeting) {
            return res.status(404).json({
                success: false,
                message: "Meeting not found"
            });
        }

        const transcriptText = meeting.transcript
            .map(
                item =>
                    `${item.timestamp} ${item.speaker}: ${item.text}`
            )
            .join("\n");

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",

            contents: transcriptText,

            config: {
                systemInstruction: `
You are a Meeting Intelligence Assistant.

Analyze the transcript and return ONLY valid JSON.

Do not use markdown.
Do not use headings.
Do not add explanation text.

Return exactly in this format:

{
  "summary": [
    {
      "text": "",
      "citations": [
        {
          "timestamp": ""
        }
      ]
    }
  ],
  "actionItems": [
    {
      "task": "",
      "assignee": "",
      "citations": [
        {
          "timestamp": ""
        }
      ]
    }
  ],
  "decisions": [
    {
      "text": "",
      "citations": [
        {
          "timestamp": ""
        }
      ]
    }
  ],
  "followUps": [
    {
      "text": "",
      "citations": [
        {
          "timestamp": ""
        }
      ]
    }
  ]
}

Only use information explicitly present in the transcript.
If a section has no items, return an empty array.
Do not invent information.

Important Rules:

1. Every citation timestamp MUST exactly match a timestamp present in the transcript.
2. Do not create citations that do not exist.
3. Do not infer decisions from suggestions.
4. Do not infer follow-ups.
5. If information is missing, return an empty array.
6. Every action item must be explicitly stated by a speaker.
`
            }
        });

        const analysis = JSON.parse(response.text);

        res.status(200).json({
          traceId: req.traceId,
            success: true,
            analysis
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = analyzeMeeting;