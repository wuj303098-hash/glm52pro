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
  assert.deepEqual(ADS.desktop, {
    key: "33b22026b6cfd10435094eee78c08e35",
    width: 300,
    height: 250,
  });
  assert.deepEqual(ADS.mobile, {
    key: "b63bf3ca168b9914a181b932cd159a2a",
    width: 320,
    height: 50,
  });
});

test("builds an isolated document for the selected creative", () => {
  const document = buildAdDocument(ADS.desktop);

  assert.match(document, /window\.atOptions/);
  assert.match(document, /"format":"iframe"/);
  assert.match(document, /33b22026b6cfd10435094eee78c08e35\/invoke\.js/);
});

test("removes the placeholder AdSense publisher loader", () => {
  const layout = fs.readFileSync(
    path.join(__dirname, "../app/layout.tsx"),
    "utf8",
  );

  assert.doesNotMatch(
    layout,
    /ca-pub-XXXXXXXXXXXXXXXX|pagead2\.googlesyndication\.com/,
  );
});

test("the shared unit selects one responsive srcDoc iframe", () => {
  const component = fs.readFileSync(
    path.join(__dirname, "../components/AdUnit.tsx"),
    "utf8",
  );

  assert.match(component, /matchMedia\("\(min-width: 768px\)"\)/);
  assert.match(component, /srcDoc=/);
  assert.match(component, /buildAdDocument/);
  assert.doesNotMatch(component, /adsbygoogle/);
});
