
// src/components/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;           // مهم: خزن المرجع قبل await
    setLoading(true);
    setOk(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      setOk(res.ok);
      if (res.ok) form.reset();             // استخدم المرجع الآمن
    } catch (err) {
      console.error(err);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {/* حقولك كما هي */}
      <input name="name" placeholder=" الاسم الكامل" className="input" required />
      <input name="email" type="email" placeholder="البريد" className="input" required />
      <input name="phone" placeholder="الهاتف (اختياري)" className="input" />
      <textarea name="message" placeholder="اكتب رسالتك" className="input h-32" required />
      <button disabled={loading} className="btn-primary w-full">
        {loading ? "جارٍ الإرسال..." : "إرسال"}
      </button>
      {ok === true && <p className="text-green-600">تم الإرسال بنجاح ✅</p>}
      {ok === false && <p className="text-rose-600">تعذّر الإرسال. حاول لاحقاً.</p>}
    </form>
  );
}
