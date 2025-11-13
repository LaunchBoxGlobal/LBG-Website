import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body >>", body ,process.env.TO_EMAIL , process.env.TO_EMAIL_2 );

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
  transporter.sendMail({
      // from: `${body?.firstName} <${process.env.SMTP_USER}>`,
   from: `"Lead" <biz_lbg@launchbox.pk>`, // recognized by Odoo
  to: `newsletter@launchbox.odoo.com`,   
      subject: body?.emailSubject
        ? body?.emailSubject
        : "New Contact Form From Website",
      html: `
  ${body?.firstName ? `<p><strong>Name:</strong> ${body.firstName}</p>` : ""}
  ${body?.email ? `<p><strong>Email:</strong> ${body.email}</p>` : ""}
  ${
    body?.phoneNumber
      ? `<p><strong>Phone No:</strong> ${body.phoneNumber}</p>`
      : ""
  }
  ${body?.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ""}
  ${
    body?.message
      ? `<p><strong>Message:</strong></p><p>${body.message}</p>`
      : ""
  }
  ${
    body?.description
      ? `<p><strong>Description:</strong></p><p>${body.description}</p>`
      : ""
  }
  ${
    body?.pageUrl
      ? `<p><strong>Submitted from:</strong> ${body.pageUrl}</p>`
      : ""
  } 
  ${
    body?.agreeToTermsConditions
      ? `<p><strong>Agreed to terms & conditions:</strong> ${body.agreeToTermsConditions}</p>`
      : ""
  }
`,
    }).then(console.log).catch(console.error);;

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
