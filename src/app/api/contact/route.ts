// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getProjectTypeLabel(value: string) {
  const labels: Record<string, string> = {
    website: "Website or Web App",
    mobile_app: "Mobile Application",
    custom_software: "Custom Software",
    management_system: "Management System",
    ai_solution: "AI-powered Solution",
    game: "Game or Interactive Experience",
    other: "Other",
  };

  return labels[value] || value || "Not specified";
}

export async function POST(req: Request) {
  try {
    const fd = await req.formData();

    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const projectType = (fd.get("project_type") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeProjectType = escapeHtml(
      getProjectTypeLabel(projectType)
    );
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const { error } = await resend.emails.send({
      from: "NoviTech <noreply@novitech.ae>",
      to: ["info@novitech.ae"],
      replyTo: email,
      subject: `New NoviTech enquiry — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.6;">
          <h2 style="margin-bottom: 24px;">
            New website enquiry
          </h2>

          <p>
            <strong>Name:</strong><br/>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong><br/>
            ${safeEmail}
          </p>

          <p>
            <strong>Phone:</strong><br/>
            ${safePhone}
          </p>

          <p>
            <strong>Project type:</strong><br/>
            ${safeProjectType}
          </p>

          <p>
            <strong>Project details:</strong><br/>
            ${safeMessage}
          </p>

          <hr style="border: 0; border-top: 1px solid #dddddd; margin: 28px 0;" />

          <p style="font-size: 12px; color: #777777;">
            Sent through the NoviTech website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          ok: false,
          error: "Email delivery failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process request",
      },
      { status: 400 }
    );
  }
}