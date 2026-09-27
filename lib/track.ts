declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const page_path = typeof params.page_path === "string" ? params.page_path : window.location.pathname;
  const fullParams: Record<string, unknown> = {
    page_path,
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", event, fullParams);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...fullParams,
  });
}
