"use client";
// src/components/ContactForm.jsx

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null);

  const pathname = usePathname();
  const isAr = pathname?.startsWith("/ar");

  async function onSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setOk(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setOk(true);
      form.reset();
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full border border-border bg-transparent px-4 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-muted/70 focus:border-accent";

  return (
    <form
      onSubmit={onSubmit}
      dir={isAr ? "rtl" : "ltr"}
      className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-xs font-medium text-charcoal"
        >
          {isAr ? "الاسم الكامل" : "Full name"}
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={isAr ? "اكتب اسمك الكامل" : "Your full name"}
          required
          className={fieldClass}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-xs font-medium text-charcoal"
        >
          {isAr ? "البريد الإلكتروني" : "Email address"}
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={isAr ? "example@email.com" : "example@email.com"}
          required
          className={fieldClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="mb-2 block text-xs font-medium text-charcoal"
        >
          {isAr ? "رقم الهاتف" : "Phone number"}
          <span className="ms-1 font-normal text-muted">
            {isAr ? "(اختياري)" : "(optional)"}
          </span>
        </label>

        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={isAr ? "+971" : "+971"}
          className={fieldClass}
        />
      </div>

      {/* Project type */}
      <div>
        <label
          htmlFor="contact-project-type"
          className="mb-2 block text-xs font-medium text-charcoal"
        >
          {isAr ? "نوع المشروع" : "Project type"}
        </label>

        <select
          id="contact-project-type"
          name="project_type"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            {isAr ? "اختر نوع المشروع" : "Select project type"}
          </option>

          <option value="website">
            {isAr ? "موقع أو منصة ويب" : "Website or Web App"}
          </option>

          <option value="mobile_app">
            {isAr ? "تطبيق جوال" : "Mobile Application"}
          </option>

          <option value="custom_software">
            {isAr ? "برمجيات مخصصة" : "Custom Software"}
          </option>

          <option value="management_system">
            {isAr ? "نظام إداري" : "Management System"}
          </option>

          <option value="ai_solution">
            {isAr ? "حل مدعوم بالذكاء الاصطناعي" : "AI-powered Solution"}
          </option>

          <option value="game">
            {isAr ? "لعبة أو تجربة تفاعلية" : "Game or Interactive Experience"}
          </option>

          <option value="other">
            {isAr ? "أخرى" : "Other"}
          </option>
        </select>
      </div>

      {/* Message */}
      <div className="md:col-span-2">
        <label
          htmlFor="contact-message"
          className="mb-2 block text-xs font-medium text-charcoal"
        >
          {isAr ? "تفاصيل المشروع" : "Project details"}
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder={
            isAr
              ? "حدثنا عن فكرتك، احتياجك، أو المشكلة التي ترغب في حلها..."
              : "Tell us about your idea, requirements, or the problem you want to solve..."
          }
          className={`${fieldClass} resize-none leading-7`}
        />
      </div>

      {/* Bottom */}
      <div className="md:col-span-2">
        <div className="flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-6 text-muted">
            {isAr
              ? "تُستخدم معلوماتك فقط للتواصل معك بخصوص استفسارك أو مشروعك."
              : "Your information is used only to contact you regarding your enquiry or project."}
          </p>

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex min-w-36 items-center justify-center gap-2
              border border-charcoal bg-charcoal
              px-8 py-3
              text-sm text-beige
              transition
              hover:bg-transparent hover:text-charcoal
              disabled:cursor-not-allowed disabled:opacity-60
            "
          >
            {loading && (
              <Loader2
                size={15}
                className="animate-spin"
              />
            )}

            {loading
              ? isAr
                ? "جاري الإرسال..."
                : "Sending..."
              : isAr
              ? "إرسال الطلب"
              : "Send enquiry"}
          </button>
        </div>

        {/* Success */}
        {ok === true && (
          <div className="mt-5 flex items-start gap-2 border border-green-700/20 bg-green-700/5 px-4 py-3 text-sm text-green-800">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0"
            />

            <span>
              {isAr
                ? "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً."
                : "Your message was sent successfully. We'll get back to you soon."}
            </span>
          </div>
        )}

        {/* Error */}
        {ok === false && (
          <div className="mt-5 flex items-start gap-2 border border-red-700/20 bg-red-700/5 px-4 py-3 text-sm text-red-800">
            <AlertCircle
              size={17}
              className="mt-0.5 shrink-0"
            />

            <span>
              {isAr
                ? "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى."
                : "Something went wrong. Please try again."}
            </span>
          </div>
        )}
      </div>
    </form>
  );
}