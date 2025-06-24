import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    // console.log("body >>", body);

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
      port: process.env.SMTP_PORT, // usually 465 (secure) or 587 (TLS)
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `${body?.firstName} <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL, // where the form gets sent
      subject: body?.emailSubject
        ? body?.emailSubject
        : "New Contact Form Website",
      html: `
        <p><strong>Name:</strong> ${body?.firstName}</p>
        <p><strong>Email:</strong> ${body?.email}</p>
        <p><strong>Phone No:</strong> ${body?.phoneNumber}</p>
        <p><strong>Service:</strong> ${body?.service}</p>
        <p><strong>Message:</strong></p>
        <p>${body?.message}</p>
         <p><strong>Submitted from:</strong> ${body?.pageUrl}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
