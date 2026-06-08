const express=require('express');
const router = express.Router();
/**
 * @swagger
 * /api/evaluation:
 *   get:
 *     summary: Project evaluation information
 *     tags: [Evaluation]
 *     responses:
 *       200:
 *         description: Project details for evaluation
 */
router.get("/evaluation", (req, res) => {
    res.status(200).json({
        candidateName: "Shivam Dhakad",
        email: "shivamdhakad324@gmail.com",
        repositoryUrl: "https://www.linkedin.com/safety/go?url=https%3A%2F%2Fgithub.com%2FDhakadshiv%2FMeeting_Intelligence_Service%2Ftree%2Fmain&trk=flagship-messaging-web&messageThreadUrn=urn%3Ali%3AmessagingThread%3A2-ZDNiN2U4ZjYtMTdmYS00ZTA4LWI3YzYtZTRjMjQzMTFlNmRiXzEwMA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BLhxpkN6tTn2yHXVFLJ3%2Byg%3D%3D",
        deployedUrl: "https://www.linkedin.com/safety/go?url=https%3A%2F%2Fmeeting-intelligence-service-rbnl.onrender.com%2Fapi-docs%2F&trk=flagship-messaging-web&messageThreadUrn=urn%3Ali%3AmessagingThread%3A2-ZDNiN2U4ZjYtMTdmYS00ZTA4LWI3YzYtZTRjMjQzMTFlNmRiXzEwMA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BLhxpkN6tTn2yHXVFLJ3%2Byg%3D%3D",
        externalIntegration: "Email",
        features: [
            "Authentication",
            "Meeting Management",
            "AI Analysis",
            "Action Item Management",
            "Overdue Detection",
            "Reminder Scheduler",
            "Email Integration",
            "Swagger Documentation"
        ]
    });
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     tags: [Evaluation]
 *     responses:
 *       200:
 *         description: Server is healthy
 */
router.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

module.exports=router

