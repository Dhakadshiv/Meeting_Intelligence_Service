const express=require("express")
const {createMeeting,getAllMeeting,getMeetingById}=require("../controllers/MeetingControllers")
const isAuthenticated=require("../middleware/Authentication")

 const MeetingRouter=express.Router();

/**
 * @swagger
 * /api/createMeeting:
 *   post:
 *     summary: Create a new meeting
 *     tags: [Meeting]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               participants:
 *                 type: array
 *                 items:
 *                   type: string
 *               meetingDate:
 *                 type: string
 *                 format: date-time
 *               transcript:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                     speaker:
 *                       type: string
 *                     text:
 *                       type: string
 *             required:
 *               - title
 *               - participants
 *               - meetingDate
 *     responses:
 *       201:
 *         description: Meeting created successfully
 *       400:
 *         description: Invalid input
 */

 MeetingRouter.post("/createMeeting",isAuthenticated, createMeeting);
/**
 * @swagger
 * /api/getAllMeeting:
 *   get:
 *     summary: Get all meetings
 *     tags: [Meeting]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of all meetings
 */
 MeetingRouter.get("/getAllMeeting",isAuthenticated, getAllMeeting);

 /**
 * @swagger
 * /api/getMeeting/{id}:
 *   get:
 *     summary: Get meeting by ID
 *     tags: [Meeting]
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
 *         description: Meeting found
 *       404:
 *         description: Meeting not found
 */
 MeetingRouter.get("/getMeeting/:id",isAuthenticated,getMeetingById)

module.exports=MeetingRouter




