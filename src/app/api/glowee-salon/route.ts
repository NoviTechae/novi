// src/app/api/glowee-salon/route.ts
//
// Salon registration from novitech.ae/glowee.
// The request is saved by the Glowee backend (partner_requests table, shown in
// the admin dashboard), and the backend also sends the email to glowee@novitech.ae.

import { NextResponse } from "next/server";

const API_BASE = (
  process.env.GLOWEE_API_BASE || "https://api.novitech.ae"
).replace(/\/+$/, "");

const TYPES = ["salon", "home_service", "both"];
const SYSTEMS = ["yes", "no"];

export async function POST(req: Request) {
  try {
    const fd = await req.formData();

    // Honeypot: real people never fill this hidden field.
    if ((fd.get("website") || "").toString().trim()) {
      return NextResponse.json({ ok: true });
    }

    const salonName = (fd.get("salon_name") || "").toString().trim();
    const ownerName = (fd.get("owner_name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const area = (fd.get("area") || "").toString().trim();
    const type = (fd.get("type") || "").toString().trim();
    const instagram = (fd.get("instagram") || "").toString().trim();
    const hasSystem = (fd.get("has_system") || "").toString().trim();

    if (!salonName || !ownerName || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[+\d][\d\s()-]{6,24}$/.test(phone)) {
      return NextResponse.json(
        { ok: false, error: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (
      salonName.length > 120 ||
      ownerName.length > 100 ||
      phone.length > 30 ||
      area.length > 80 ||
      instagram.length > 200
    ) {
      return NextResponse.json(
        { ok: false, error: "Invalid field length" },
        { status: 400 }
      );
    }

    const res = await fetch(`${API_BASE}/glowee/partner`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        salonName,
        contactName: ownerName,
        phone,
        city: area,
        instagramOrWebsite: instagram,
        businessType: TYPES.includes(type) ? type : "",
        hasBookingSystem: SYSTEMS.includes(hasSystem) ? hasSystem : "",
        source: "website",
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Glowee backend rejected the request:", res.status);
      return NextResponse.json(
        { ok: false, error: "Request could not be saved" },
        { status: res.status === 429 ? 429 : 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Glowee salon form error:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 400 }
    );
  }
}
