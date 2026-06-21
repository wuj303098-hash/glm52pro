import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertFileIncludes(relativePath, snippets) {
  const content = read(relativePath);
  for (const snippet of snippets) {
    assert.match(content, snippet, `${relativePath} should include ${snippet}`);
  }
}

function assertFileExcludes(relativePath, snippets) {
  const content = read(relativePath);
  for (const snippet of snippets) {
    assert.doesNotMatch(content, snippet, `${relativePath} should not include ${snippet}`);
  }
}

test("homepage and navigation prioritize GLM5.2 API and OpenRouter", () => {
  assertFileIncludes("app/page.tsx", [
    /GLM5\.2 API/,
    /href="\/glm5\.2-api"/,
    /href="\/openrouter"/,
    /z-ai\/glm-5\.2/,
  ]);

  assertFileIncludes("app/layout.tsx", [
    /href: "\/glm5\.2-api"/,
    /href: "\/openrouter"/,
  ]);
});

test("GLM5.2 API landing page covers current model facts and setup examples", () => {
  assertFileIncludes("app/glm5.2-api/page.tsx", [
    /GLM5\.2 API/,
    /1M-token context/,
    /z-ai\/glm-5\.2/,
    /glm-5\.2/,
    /https:\/\/api\.z\.ai\/api\/paas\/v4\/chat\/completions/,
    /\$1\.20/,
    /\$4\.10/,
  ]);
});

test("OpenRouter landing page targets the trending provider query", () => {
  assertFileIncludes("app/openrouter/page.tsx", [
    /GLM 5\.2 on OpenRouter/,
    /z-ai\/glm-5\.2/,
    /https:\/\/openrouter\.ai\/api\/v1/,
    /reasoning/,
    /1M-token context/,
  ]);
});

test("pricing and coding setup pages use current GLM 5.2 identifiers", () => {
  assertFileIncludes("app/pricing/page.tsx", [
    /z-ai\/glm-5\.2/,
    /\$1\.20/,
    /\$4\.10/,
    /1M tokens/,
  ]);

  assertFileIncludes("app/opencode/page.tsx", [
    /z-ai\/glm-5\.2/,
    /glm-5\.2\[1m\]/,
    /https:\/\/api\.z\.ai\/api\/coding\/paas\/v4/,
  ]);

  assertFileExcludes("app/opencode/page.tsx", [
    /zhipuai\/glm-4/,
    /glm-4-plus/,
    /open\.bigmodel\.cn/,
  ]);
});

test("local deployment content no longer points users to old GLM4 Ollama examples", () => {
  assertFileIncludes("app/ollama/page.tsx", [
    /zai-org\/GLM-5\.2/,
    /vLLM/,
    /SGLang/,
  ]);

  assertFileExcludes("app/ollama/page.tsx", [
    /glm4:7b/,
    /glm4:32b/,
  ]);
});
