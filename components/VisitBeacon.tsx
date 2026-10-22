"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";

// Sends one small, cookieless beacon per page view, plus real-user Core Web Vitals.
// "New visitor" is a localStorage flag with no identifier in it.

function send(data: Record<string, unknown>) {
  try {
    const body = JSON.stringify(data);
    if (navigator.sendBeacon) navigator.sendBeacon("/api/visit", new Blob([body], { type: "application/json" }));
    else fetch("/api/visit", { method: "POST", body, keepalive: true, headers: { "content-type": "application/json" } });
  } catch {
    /* never let analytics affect the page */
  }
}

// Next can re-deliver load-time metrics after client-side navigation. Key each reading to the page
// load it came from (performance.timeOrigin) and report each metric once per load.
function firstTime(key: string): boolean {
  try {
    const k = `tbc_v_${key}`;
    if (sessionStorage.getItem(k)) return false;
    sessionStorage.setItem(k, "1");
    return true;
  } catch {
    return true;
  }
}

export default function VisitBeacon() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    let isNew = false;
    try {
      isNew = !localStorage.getItem("tbc_seen");
      if (isNew) localStorage.setItem("tbc_seen", "1");
    } catch {
      /* storage blocked: count as returning */
    }
    send({ t: "view", path: pathname, ref: document.referrer || undefined, isNew });
  }, [pathname]);

  useReportWebVitals((m) => {
    if (["LCP", "INP", "CLS", "FCP", "TTFB"].includes(m.name) && firstTime(`${Math.round(performance.timeOrigin)}_${m.name}`)) {
      send({ t: "vital", path: window.location.pathname, name: m.name, value: m.value });
    }
  });

  return null;
}
