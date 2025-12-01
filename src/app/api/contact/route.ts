// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const fd = await req.formData();
    const name = (fd.get("name") || "").toString();
    const email = (fd.get("email") || "").toString();
    const phone = (fd.get("phone") || "").toString();
    const message = (fd.get("message") || "").toString();

    const { error } = await resend.emails.send({
      from: "NoviTech <noreply@novitech.ae>",  // ← الحل الأساسي
      to: ["info@novitech.ae"],               // ← الإيميل الرسمي
      replyTo: email || undefined,           // ← مهم جداً
      subject: "رسالة جديدة من نموذج التواصل",
      html: `
        <h2>رسالة جديدة</h2>
        <p><b>الاسم:</b> ${name}</p>
        <p><b>البريد:</b> ${email}</p>
        <p><b>الهاتف:</b> ${phone}</p>
        <p><b>الرسالة:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}