import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Run GLM 5.2 Locally: vLLM, SGLang and HuggingFace Guide 2026",
  description:
    "How to run GLM 5.2 locally with zai-org/GLM-5.2 using vLLM, SGLang, Transformers, and other supported inference frameworks.",
};

const steps = [
  {
    step: 1,
    title: "Get the model",
    content: "Use the official HuggingFace repository for the current open weights.",
    code: "huggingface-cli download zai-org/GLM-5.2 --local-dir ./GLM-5.2",
  },
  {
    step: 2,
    title: "Serve with vLLM",
    content: "vLLM is one of the supported local serving frameworks for GLM 5.2.",
    code: "pip install vllm\nvllm serve zai-org/GLM-5.2 --served-model-name glm-5.2",
  },
  {
    step: 3,
    title: "Serve with SGLang",
    content: "SGLang is also listed as a supported GLM 5.2 deployment path.",
    code: "pip install sglang\npython -m sglang.launch_server --model-path zai-org/GLM-5.2 --served-model-name glm-5.2",
  },
  {
    step: 4,
    title: "Call the local server",
    content: "Most serving frameworks expose an OpenAI-compatible chat completions API.",
    code: `curl http://localhost:8000/v1/chat/completions -H "Content-Type: application/json" -d '{\n  "model": "glm-5.2",\n  "messages": [{"role": "user", "content": "Write a Python hello world"}]\n}'`,
  },
];

const frameworks = [
  { name: "vLLM", role: "OpenAI-compatible API serving", best: "Production and private API deployments" },
  { name: "SGLang", role: "High-throughput inference server", best: "Agentic coding and batch workloads" },
  { name: "Transformers", role: "Python research workflow", best: "Scripts, notebooks, and experimentation" },
  { name: "KTransformers", role: "Optimized local inference", best: "Workstation experiments" },
  { name: "Unsloth", role: "Fine-tuning workflow", best: "Adapter training and evaluation" },
];

export default function OllamaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Run GLM 5.2 Locally</h1>
      <p className="text-gray-500 mb-8">
        Use zai-org/GLM-5.2 with vLLM, SGLang, Transformers, KTransformers, or Unsloth.
      </p>

      <AdUnit slot="2233445566" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Supported Local Paths</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {frameworks.map((item) => (
            <div key={item.name} className="rounded-xl border border-gray-200 p-4">
              <div className="font-semibold text-gray-900">{item.name}</div>
              <div className="mt-1 text-sm text-gray-600">{item.role}</div>
              <div className="mt-2 text-xs text-gray-500">{item.best}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Step-by-Step Setup</h2>
        <div className="space-y-6">
          {steps.map(({ step, title, content, code }) => (
            <div key={step} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">{step}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm mb-3">{content}</p>
                <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-xs overflow-x-auto">{code}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="3344556677" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Use a Local Server with OpenCode</h2>
        <p className="text-gray-600 mb-4">Once your local OpenAI-compatible server is running, point OpenCode at it:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`# In your OpenCode config (opencode.json)
{
  "model": {
    "provider": "openai",
    "name": "glm-5.2",
    "baseURL": "http://localhost:8000/v1",
    "apiKey": "local"
  }
}`}</pre>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <h3 className="font-bold text-yellow-900 mb-2">Tips for Best Performance</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>Use vLLM or SGLang for API serving rather than old GLM4 Ollama examples.</li>
          <li>Plan capacity around the 1M-token context. Full-context runs need much more memory.</li>
          <li>Use the official HuggingFace repository: zai-org/GLM-5.2.</li>
          <li>For production, compare local serving cost against Z.ai or OpenRouter before committing.</li>
        </ul>
      </section>
    </div>
  );
}
