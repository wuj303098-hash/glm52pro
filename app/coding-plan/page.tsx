import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 Coding Plan Feature — How It Works & Real Examples",
  description: "Learn how GLM 5.2's Coding Plan feature works: multi-file planning, step-by-step execution, and real code examples. Better than zero-shot coding.",
};

export default function CodingPlanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 Coding Plan</h1>
      <p className="text-gray-500 mb-8">How GLM 5.2 plans before it codes — and why it matters for complex projects</p>

      <AdUnit slot="9999999999" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What is Coding Plan?</h2>
        <p className="text-gray-700 mb-4">
          <strong>Coding Plan</strong> is a feature built into GLM 5.2 where the model generates a structured multi-file plan <em>before</em> writing any code. Instead of jumping directly into implementation, it first outputs:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>A list of files to create or modify</li>
          <li>The purpose and content of each file</li>
          <li>Dependencies between files</li>
          <li>The implementation order</li>
        </ul>
        <p className="text-gray-700">
          This mirrors how a senior software engineer approaches a complex task and dramatically reduces errors in multi-file projects.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Example: Building a REST API</h2>
        <p className="text-gray-600 mb-3">Prompt: <em>&quot;Create a FastAPI todo app with SQLite, authentication, and tests.&quot;</em></p>

        <div className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm font-mono mb-4 overflow-x-auto">
          <div className="text-gray-400 mb-3">// GLM 5.2 Coding Plan output:</div>
          <div className="text-yellow-300 mb-2">📋 CODING PLAN</div>
          <div className="mb-1">Files to create (6 total):</div>
          <div className="text-gray-300 space-y-1 ml-2">
            <div>1. main.py — FastAPI app entry point, router registration</div>
            <div>2. models.py — SQLAlchemy models: User, Todo</div>
            <div>3. database.py — DB connection, session management</div>
            <div>4. auth.py — JWT token creation, password hashing</div>
            <div>5. routers/todos.py — CRUD endpoints with auth dependency</div>
            <div>6. tests/test_todos.py — pytest suite with fixtures</div>
          </div>
          <div className="mt-3 text-gray-400">Implementation order: database → models → auth → main → routers → tests</div>
        </div>

        <p className="text-gray-600 text-sm">After the plan, GLM 5.2 generates each file in sequence, referencing the plan to maintain consistency.</p>
      </section>

      <AdUnit slot="1010101010" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Coding Plan vs. Zero-Shot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-red-200 bg-red-50 rounded-xl p-4">
            <div className="font-bold text-red-800 mb-2">Without Coding Plan</div>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Imports between files break</li>
              <li>• No consistent naming conventions</li>
              <li>• Test fixtures don&apos;t match models</li>
              <li>• Auth logic duplicated</li>
              <li>• Often forgets edge cases</li>
            </ul>
          </div>
          <div className="border border-green-200 bg-green-50 rounded-xl p-4">
            <div className="font-bold text-green-800 mb-2">With Coding Plan</div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Consistent imports across files</li>
              <li>• Unified naming from the start</li>
              <li>• Tests written against actual models</li>
              <li>• Auth centralized as dependency</li>
              <li>• Plan forces edge case consideration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">How to Trigger Coding Plan</h2>
        <div className="bg-gray-50 rounded-xl p-5 space-y-4 text-sm">
          <div>
            <div className="font-semibold mb-1">Method 1: Automatic (recommended)</div>
            <div className="text-gray-600">GLM 5.2 automatically activates Coding Plan for complex multi-file prompts. Just describe your project clearly.</div>
          </div>
          <div>
            <div className="font-semibold mb-1">Method 2: Explicit prompt</div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 font-mono text-xs text-gray-700">
              Before writing code, create a coding plan listing all files and their purpose. Then implement each file.
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">Method 3: Via OpenCode</div>
            <div className="text-gray-600">OpenCode automatically uses GLM 5.2&apos;s planning mode when configured as the backend model.</div>
          </div>
        </div>
      </section>

      <AdUnit slot="1111222233" />
    </div>
  );
}
