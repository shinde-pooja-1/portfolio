import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Confirmation Email to USER
    await transporter.sendMail({
      from: `"Pooja Shinde" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Message Received ✅",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out. I have received your message and will get back to you soon.</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
