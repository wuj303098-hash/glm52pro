# Responsive Ads Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace every placeholder AdSense unit with one responsive High Performance Format ad that loads the 300x250 creative on desktop and the 320x50 creative on mobile.

**Architecture:** Keep ad metadata and breakpoint selection in a small CommonJS module that Node and Next.js can both consume. The shared client `AdUnit` observes the breakpoint and renders only the selected creative inside an isolated `srcDoc` iframe, preventing `atOptions` collisions and containing third-party document writes.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Node.js built-in test runner, Vercel static export.

---

### Task 1: Add Failing Advertising Tests

**Files:**
- Create: `tests/ads.test.mjs`
- Create after the red run: `lib/ad-config.js`

- [x] **Step 1: Write tests for both creatives and breakpoint selection**

```js
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import adConfig from "../lib/ad-config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { ADS, buildAdDocument, selectAdConfig } = adConfig;

test("selects the 300x250 creative for desktop", () => {
  assert.deepEqual(selectAdConfig(true), ADS.desktop);
});

test("selects the 320x50 creative for mobile", () => {
  assert.deepEqual(selectAdConfig(false), ADS.mobile);
});

test("uses the supplied advertising keys and dimensions", () => {
  assert.deepEqual(ADS.desktop, { key: "33b22026b6cfd10435094eee78c08e35", width: 300, height: 250 });
  assert.deepEqual(ADS.mobile, { key: "b63bf3ca168b9914a181b932cd159a2a", width: 320, height: 50 });
});

test("builds an isolated document for the selected creative", () => {
  const document = buildAdDocument(ADS.desktop);
  assert.match(document, /window\.atOptions/);
  assert.match(document, /"format":"iframe"/);
  assert.match(document, /33b22026b6cfd10435094eee78c08e35\/invoke\.js/);
});

test("removes the placeholder AdSense publisher loader", () => {
  const layout = fs.readFileSync(path.join(__dirname, "../app/layout.tsx"), "utf8");
  assert.doesNotMatch(layout, /ca-pub-XXXXXXXXXXXXXXXX|pagead2\.googlesyndication\.com/);
});
```

- [x] **Step 2: Run the test and verify the red state**

Run: `node --test tests/ads.test.mjs`

Expected: FAIL with `Cannot find module '../lib/ad-config.js'`.

- [x] **Step 3: Add the minimal configuration module**

```js
const ADS = Object.freeze({
  desktop: Object.freeze({ key: "33b22026b6cfd10435094eee78c08e35", width: 300, height: 250 }),
  mobile: Object.freeze({ key: "b63bf3ca168b9914a181b932cd159a2a", width: 320, height: 50 }),
});

function selectAdConfig(isDesktop) {
  return isDesktop ? ADS.desktop : ADS.mobile;
}

function buildAdDocument({ key, width, height }) {
  const options = JSON.stringify({ key, format: "iframe", height, width, params: {} });
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;overflow:hidden;background:transparent}</style></head><body><script>window.atOptions=${options};<\/script><script src="https://www.highperformanceformat.com/${key}/invoke.js"><\/script></body></html>`;
}

module.exports = { ADS, buildAdDocument, selectAdConfig };
```

### Task 2: Replace The Shared Ad Unit

**Files:**
- Modify: `components/AdUnit.tsx`
- Modify: `app/layout.tsx`

- [x] **Step 1: Add a failing component integration test**

Append this test to `tests/ads.test.mjs`, then run `node --test tests/ads.test.mjs` and expect failure because `AdUnit` does not yet use responsive configuration or an iframe.

```js
test("the shared unit selects one responsive srcDoc iframe", () => {
  const component = fs.readFileSync(path.join(__dirname, "../components/AdUnit.tsx"), "utf8");
  assert.match(component, /matchMedia\("\(min-width: 768px\)"\)/);
  assert.match(component, /srcDoc=/);
  assert.match(component, /buildAdDocument/);
  assert.doesNotMatch(component, /adsbygoogle/);
});
```

- [x] **Step 2: Render one breakpoint-selected ad in an isolated iframe**

Replace `components/AdUnit.tsx` with:

```tsx
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
    return <div className="my-6 min-h-[50px] md:min-h-[250px]" aria-hidden="true" />;
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
```

- [x] **Step 3: Remove the placeholder AdSense loader**

Delete only the `pagead2.googlesyndication.com` `Script` element and its placeholder comment from `app/layout.tsx`; preserve Ahrefs and Google Analytics.

- [x] **Step 4: Verify the green state**

Run: `node --test tests/ads.test.mjs`

Expected: six passing tests and zero failures.

### Task 3: Validate The Static Export

**Files:**
- Modify: `package.json`

- [x] **Step 1: Add an explicit test script**

Add `"test": "node --test tests/*.test.mjs"` to `scripts`.

- [x] **Step 2: Run all checks**

Run: `npm test`

Expected: all advertising tests pass.

Run: `npm run lint`

Expected: ESLint exits with zero errors.

Run: `npm run build`

Expected: Next.js static export and sitemap generation exit successfully.

- [x] **Step 3: Inspect the generated artifacts**

Run a repository search for both supplied keys in `.next` and `out`, and for `ca-pub-XXXXXXXXXXXXXXXX` in source and output. Both keys must be present and the placeholder publisher ID must be absent.

### Task 4: Publish And Verify Production

**Files:**
- Commit: implementation, tests, package script, design, and plan

- [x] **Step 1: Review and commit the intended diff**

Run `git diff --check`, inspect `git diff`, stage only the files listed above, and commit with `Add responsive advertising units`.

- [ ] **Step 2: Push the current branch**

Run: `git push origin master`

Expected: the remote `master` branch advances to the implementation commit.

- [ ] **Step 3: Deploy to Vercel production**

Run: `npx vercel@latest deploy --prod --yes`

Expected: a production deployment URL with READY status.

- [ ] **Step 4: Verify production**

Fetch the production homepage and one guide page, confirm HTTP 200 responses, and confirm the deployed Next.js assets contain both advertising keys while the placeholder AdSense publisher ID is absent.
