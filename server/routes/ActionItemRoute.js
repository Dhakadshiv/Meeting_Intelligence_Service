const express=require("express")

 const {actionItem,updateStatus,getActionItem}=require("../controllers/ActionItemController");
 const {getOverdueActionItems}=require("../controllers/OverdueController")
 const isAuthenticated=require("../middleware/Authentication")

 const actionRoute=express.Router()

 /**
 * @swagger
 * /api/action-item:
 *   post:
 *     summary: Create a new action item
 *     tags: [ActionItem]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *               assignee:
 *                 type: string
 *               assigneeEmail:
 *                 type: string
 *               meetingId:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *             required:
 *               - task
 *               - assignee
 *               - assigneeEmail
 *               - meetingId
 *               - dueDate
 *     responses:
 *       201:
 *         description: Action item created successfully
 *       400:
 *         description: Invalid input
 */
 actionRoute.post("/action-item",isAuthenticated, actionItem);

 /**
 * @swagger
 * /api/action-item/{id}/status:
 *   patch:
 *     summary: Update action item status
 *     tags: [ActionItem]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - PENDING
 *                   - IN_PROGRESS
 *                   - COMPLETED
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       404:
 *         description: Action item not found
 */
 actionRoute.patch("/action-item/:id/status",isAuthenticated, updateStatus)

 /**
 * @swagger
 * /api/action-item:
 *   get:
 *     summary: Get all action items
 *     tags: [ActionItem]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: assignee
 *         schema:
 *           type: string
 *       - in: query
 *         name: meetingId
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of action items
 */
 actionRoute.get("/action-item",isAuthenticated, getActionItem)

 /**
 * @swagger
 * /api/action-item/overdue:
 *   get:
 *     summary: Get overdue action items
 *     tags: [ActionItem]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of overdue action items
 */
 actionRoute.get("/action-item/overdue",isAuthenticated, getOverdueActionItems)

 module.exports=actionRoute
 