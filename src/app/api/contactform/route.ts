import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Configure your SMTP transport (use environment variables in production)
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email provider
    auth: {
      user: process.env.EMAIL_USER, // set in .env.local
      pass: process.env.EMAIL_PASS, // set in .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // set in .env.local
      subject: `Contact Form Submission from ${name} (Test)`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}