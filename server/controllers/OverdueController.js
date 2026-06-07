const ActionItem = require("../models/ActionItemsModel");
const sendReminderEmail = require("../EmailService/reminder");


// to find due meeting 
const getOverdueActionItems = async (req, res) => {

    try {

        const overDueItem = await ActionItem.find({
            status: {
                $ne: "COMPLETED"
            },
            dueDate: {
                $lt: new Date()
            }
        });

        res.status(200).json({
            traceId: req.traceId,
            success: true,
            data: overDueItem
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// function for send email 
const sendOverdueReminders = async () => {

    const overDueItem = await ActionItem.find({
        status: {
            $ne: "COMPLETED"
        },
        dueDate: {
            $lt: new Date()
        }
    });

    for (const item of overDueItem) {

        await sendReminderEmail(
            item.assigneeEmail,
            item.task,
            item.assignee,
            item.dueDate
        );

    }
};

module.exports = {
    getOverdueActionItems,
    sendOverdueReminders
};