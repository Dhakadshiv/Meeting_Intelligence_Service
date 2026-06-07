require("dotenv").config();

const { Resend } = require("resend");

const resend = new Resend(
    process.env.RESEND_API
);

const sendReminderEmail = async (
    email,
    task,
    assignee,
    dueDate
    ) => {

    const { data, error } =
        await resend.emails.send({
            from:
              "Meeting Assistant <onboarding@resend.dev>",

            to: [email],

            subject:
              "Overdue Task Reminder",
            html: `
                <h2>Reminder</h2>
                <p>
                  <strong>Task:</strong>
                  ${task}
                </p>
                <p>
                  <strong>Assigned To:</strong>
                  ${assignee}
                </p>
                <p>
                  <strong>Due Date:</strong>
                  ${dueDate}
                </p> `
        });

    if(error){
        throw error;
    }
    return data;
};

module.exports = sendReminderEmail;