const cron=require("node-cron")
const {sendOverdueReminders}=require("../controllers/OverdueController")

cron.schedule("0 22 * * *", async () => { // it  will send every day at 10 pm 
    await sendOverdueReminders();
});

