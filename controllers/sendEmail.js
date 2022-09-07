const nodeMailer = require("nodemailer");

const sgMail = require("@sendgrid/mail");

const sendEmail = async (req, res) => {
  let testAccount = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ebba18@ethereals.email",
      pass: "ssfnsfjsnfjsnfjshdhwdjawn",
    },
  });

  let info = await transporter.sendMail({
    from: '"Shreyas Test" <test@ethereal.com>', // sender address
    to: "test@gmail.com, steve.jobs@gmail.com", // list of receivers
    // to: "bar@example.com",
    subject: "Hello ✔", // Subject line

    html: "<b> Sending emails with NodeJS</b>", // html body
  });
  res.json(info);
};

const sendGrid = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "test@gmail.com", // Change to your recipient
    from: "johndoe@gmail.com", // Change to your verified sender
    subject: "Test",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  //   const info = await sgMail.send(msg);
  //   res.json(info);
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
  res.json("EMAIL SENT");
};
module.exports = {
  sendEmail,
  sendGrid,
};
