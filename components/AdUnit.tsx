"use client";
import { useEffect } from "react";

declare global {
  interface Window { adsbygoogle: unknown[] }
}

export default function AdUnit({ slot, format = "auto" }: { slot: string; format?: string }) {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []);

  return (
    <div className="my-6 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
