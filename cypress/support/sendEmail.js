const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  debug: true,
  logger: true,
  host: "relay.emea.cbre.net",
  port: 25,
  secure: false, // true for 465,
  auth: {
    user: "",
    pass: "",
  },
  ignoreTLS: true,
});

let mailDetails = {
  from: "plus.dev@cbre.com",
  to: ["hardik.prajapati@imriel.com", "dhara@imriel.com", "javed@imriel.com"],
  subject: "Automation Test Report",
  text: "<h1>Testing mail for Canada Plus</h1>",
  html:
    "Hello Team,<br>Please find the attached report for Canada Plus Automation Tests Execution.<br/><br>Thanks!<br/>", // html body
  attachments: {
    filename: "report.html",
    path: "./cypress/e2e-reports/report.html",
  },
};

transporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log("Error occured while sending an Email:" + err);
  } else {
    console.log("Email sent successfully.");
  }
});

// verify connection configuration
transporter.verify(function (error) {
  if (error) {
    console.log("FAILURE: " + error);
  } else {
    console.log("SUCCESS: Server is ready to take our messages");
  }
});
