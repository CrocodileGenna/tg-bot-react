const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aleksandrovicdmitrij788@gmail.com", // Ваш електронний поштовий адрес
    pass: "Qq1199ww", // Ваш пароль
  },
});
const sendEmail = (emailAddress, messageText) => {
  const mailOptions = {
    from: "aleksandrovicdmitrij788@gmail.com",
    to: emailAddress,
    subject: "Нове повідомлення",
    text: messageText,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Сталася помилка під час відправлення листа:", error);
    } else {
      console.log("Повідомлення успішно надіслано:", info.response);
    }
  });
};
export const sendMessage = () => {
  app.post("/sendEmail", (req, res) => {
    const { email, message } = req.body;
    sendEmail(email, message);
    res.send("Повідомлення надіслано");
  });
};
