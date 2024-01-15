import nodemailer from 'nodemailer'

export default async function handler(request, res) {
  const { email, message } = await JSON.parse(request.body)

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_PW,
    },
  })

  const mailOptions = {
    from: process.env.NODEMAILER_MAIL,
    to: process.env.NODEMAILER_MAIL,
    subject: `Wiadomość od ${email} `,
    text: message,
  }

  try {
    await transport.sendMail(mailOptions)
    return res.status(200).json({ message: 'Ok' })
  } catch (err) {
    return res.status(500).json({ err })
  }
}
