"use client";

import { useEffect, useState } from "react";
import { buildAdDocument, selectAdConfig } from "@/lib/ad-config";

export default function AdUnit({ slot }: { slot: string }) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  if (isDesktop === null) {
    return (
      <div
        className="my-6 min-h-[50px] md:min-h-[250px]"
        aria-hidden="true"
      />
    );
  }

  const ad = selectAdConfig(isDesktop);

  return (
    <div className="my-6 flex min-h-[50px] justify-center md:min-h-[250px]">
      <iframe
        key={ad.key}
        title={`Advertisement ${slot}`}
        srcDoc={buildAdDocument(ad)}
        width={ad.width}
        height={ad.height}
        scrolling="no"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ border: 0, overflow: "hidden" }}
      />
    </div>
  );
}
