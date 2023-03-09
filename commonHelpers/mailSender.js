const nodemailer = require("nodemailer");
const keys = require("../config/keys");
const getConfigs = require("../config/getConfigs");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  const configs = await getConfigs();
  //authorization for sending email
  let transporter = nodemailer.createTransport({
    service:
      process.env.NODE_ENV === "production"
        ? configs.production.email.mailService
        : configs.development.email.mailService,
    auth: {
      user:
        process.env.NODE_ENV === "production"
          ? configs.production.email.mailUser
          : configs.development.email.mailUser,
      pass:
        process.env.NODE_ENV === "production"
          ? configs.production.email.mailPassword
          : configs.development.email.mailPassword
    }
  });
  const mailOptions = {
    from:
      process.env.NODE_ENV === "production"
        ? configs.production.email.mailUser
        : configs.development.email.mailUser,
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml
  };
  const result = await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log("error is "+error);
       resolve(false); // or use rejcet(false) but then you will have to handle errors
    } 
   else {
       console.log('Email sent: ' + info.response);
       resolve(true);
    }
   });
  return result;
};
