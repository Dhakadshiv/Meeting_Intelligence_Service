const express=require("express")

const analyzeMeeting = require("../controllers/MeetingAnalysisController");
const isAuthenticated=require("../middleware/Authentication")
 
 const analysisRoute=express.Router();

 /**
 * @swagger
 * /api/analyze/{id}:
 *   post:
 *     summary: Analyze a meeting transcript using AI
 *     tags: [Analysis]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Meeting ID
 *     responses:
 *       200:
 *         description: Meeting analysis generated successfully
 *       404:
 *         description: Meeting not found
 *       500:
 *         description: AI analysis failed
 */

analysisRoute.post("/analyze/:id",isAuthenticated, analyzeMeeting);

module.exports=analysisRoute