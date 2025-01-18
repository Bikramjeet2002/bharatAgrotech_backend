const nodemailer = require("nodemailer");

const mailSender = {
  transporter: nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }),

  mailOptions(data) {
    return {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER,
      subject: data?.subject,
      html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .email-container {
                        background: #fff;
                        border-radius: 5px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }
                    h2 {
                        color: #555;
                    }
                    .info {
                        margin: 10px 0;
                    }
                    .info strong {
                        color: #000;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 0.9em;
                        color: #888;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <h2>User Information</h2>
                    <p>Hello,</p>
                    <p>You have received a new message from a user. Below are the details:</p>

                    <div class="info">
                        <strong>Name:</strong> ${data?.first_name} ${data?.last_name}
                    </div>
                    <div class="info">
                        <strong>Email:</strong> ${data?.email}
                    </div>
                    <div class="info">
                        <strong>Phone Number:</strong> ${data?.phone_number}
                    </div>
                    <div class="info">
                        <strong>Message:</strong>
                        <p>
                           ${data?.message}
                        </p>
                    </div>

                    <p>Best regards,</p>
                    <p>${data?.first_name} ${data?.last_name}</p>

                    <div class="footer">
                        <p>This email was generated automatically. Please do reply to this email.</p>
                    </div>
                </div>
            </body>
            </html>
            `,
    };
  },

  async mailSend(mailOptions) {
    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(info.response);
      return info;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
};

module.exports = mailSender;
