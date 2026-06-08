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
        repositoryUrl: "https://github.com/Dhakadshiv/Meeting_Intelligence_Service/tree/main",
        deployedUrl: "https://meeting-intelligence-service-rbnl.onrender.com/api-docs/",
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

