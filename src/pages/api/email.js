import nodemailer from 'nodemailer'

export default async function handler(request, res) {
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
    subject: `Message from `,
    text: 'test',
  }

  try {
    await transport.sendMail(mailOptions)
    return res.status(200).json({ message: 'Hello from Next.js!' })
  } catch (err) {
    return res.status(500).json({ message: 'test!', err })
  }
}
