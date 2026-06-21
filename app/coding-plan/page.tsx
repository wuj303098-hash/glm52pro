import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 Coding Plan Feature: How It Works and Examples",
  description:
    "Learn how GLM 5.2 Coding Plan works for multi-file planning, step-by-step execution, and OpenCode-style workflows.",
};

export default function CodingPlanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 Coding Plan</h1>
      <p className="text-gray-500 mb-8">
        How GLM 5.2 plans before it codes, and why it matters for complex projects.
      </p>

      <AdUnit slot="9999999999" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What is Coding Plan?</h2>
        <p className="text-gray-700 mb-4">
          Coding Plan is a GLM 5.2 workflow where the model creates a structured multi-file plan before implementation.
          Instead of jumping directly into code, it first outlines files, dependencies, and execution order.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>A list of files to create or modify</li>
          <li>The purpose and content of each file</li>
          <li>Dependencies between files</li>
          <li>The implementation order</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Example: Building a REST API</h2>
        <p className="text-gray-600 mb-3">
          Prompt: <em>&quot;Create a FastAPI todo app with SQLite, authentication, and tests.&quot;</em>
        </p>

        <div className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm font-mono mb-4 overflow-x-auto">
          <div className="text-gray-400 mb-3">{"// GLM 5.2 Coding Plan output:"}</div>
          <div className="text-yellow-300 mb-2">CODING PLAN</div>
          <div className="mb-1">Files to create (6 total):</div>
          <div className="text-gray-300 space-y-1 ml-2">
            <div>1. main.py - FastAPI app entry point and router registration</div>
            <div>2. models.py - SQLAlchemy models: User, Todo</div>
            <div>3. database.py - DB connection and session management</div>
            <div>4. auth.py - JWT token creation and password hashing</div>
            <div>5. routers/todos.py - CRUD endpoints with auth dependency</div>
            <div>6. tests/test_todos.py - pytest suite with fixtures</div>
          </div>
          <div className="mt-3 text-gray-400">Implementation order: database, models, auth, main, routers, tests</div>
        </div>

        <p className="text-gray-600 text-sm">
          After the plan, GLM 5.2 generates each file in sequence and can keep references aligned across the task.
        </p>
      </section>

      <AdUnit slot="1010101010" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Coding Plan vs. Zero-Shot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-red-200 bg-red-50 rounded-xl p-4">
            <div className="font-bold text-red-800 mb-2">Without Coding Plan</div>
            <ul className="text-sm text-red-700 space-y-1">
              <li>Imports between files break</li>
              <li>Naming conventions drift</li>
              <li>Test fixtures do not match models</li>
              <li>Auth logic gets duplicated</li>
              <li>Edge cases are often skipped</li>
            </ul>
          </div>
          <div className="border border-green-200 bg-green-50 rounded-xl p-4">
            <div className="font-bold text-green-800 mb-2">With Coding Plan</div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>Imports stay consistent across files</li>
              <li>Naming is unified from the start</li>
              <li>Tests are written against actual models</li>
              <li>Auth is centralized as a dependency</li>
              <li>The plan forces edge case consideration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">How to Trigger Coding Plan</h2>
        <div className="bg-gray-50 rounded-xl p-5 space-y-4 text-sm">
          <div>
            <div className="font-semibold mb-1">Automatic</div>
            <div className="text-gray-600">GLM 5.2 can activate planning for complex multi-file prompts.</div>
          </div>
          <div>
            <div className="font-semibold mb-1">Explicit prompt</div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 font-mono text-xs text-gray-700">
              Before writing code, create a coding plan listing all files and their purpose. Then implement each file.
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">Via OpenCode</div>
            <div className="text-gray-600">Use glm-5.2[1m] with https://api.z.ai/api/coding/paas/v4 for the direct Z.ai coding path.</div>
          </div>
        </div>
      </section>

      <AdUnit slot="1111222233" />
    </div>
  );
}
