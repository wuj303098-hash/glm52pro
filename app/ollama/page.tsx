import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Run GLM 5.2 Locally with Ollama — Step-by-Step Guide 2026",
  description: "How to download and run GLM 5.2 locally using Ollama. System requirements, installation steps, and tips for best performance.",
};

const steps = [
  {
    step: 1,
    title: "Install Ollama",
    content: "Download and install Ollama from the official site (ollama.com). Available for macOS, Linux, and Windows.",
    code: "# macOS / Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Windows: download installer from ollama.com",
  },
  {
    step: 2,
    title: "Pull GLM 5.2",
    content: "Pull the GLM 5.2 model. Choose the size based on your hardware.",
    code: "# 7B model (~4.5GB) — runs on 8GB VRAM\nollama pull glm4:7b\n\n# 32B model (~18GB) — needs 24GB VRAM\nollama pull glm4:32b",
  },
  {
    step: 3,
    title: "Run the model",
    content: "Start an interactive session or serve the API.",
    code: "# Interactive chat\nollama run glm4:7b\n\n# Serve as local API (port 11434)\nollama serve",
  },
  {
    step: 4,
    title: "Test the API",
    content: "Verify it's working with a quick curl request.",
    code: `curl http://localhost:11434/api/generate -d '{\n  "model": "glm4:7b",\n  "prompt": "Write a Python hello world",\n  "stream": false\n}'`,
  },
];

const requirements = [
  { tier: "Minimum (7B)", ram: "8GB RAM", vram: "6GB VRAM", gpu: "GTX 1660 / M1", speed: "~15 tok/s" },
  { tier: "Recommended (7B)", ram: "16GB RAM", vram: "8GB VRAM", gpu: "RTX 3070 / M2 Pro", speed: "~40 tok/s" },
  { tier: "Full (32B)", ram: "32GB RAM", vram: "24GB VRAM", gpu: "RTX 4090 / M3 Max", speed: "~25 tok/s" },
  { tier: "CPU only (7B)", ram: "16GB RAM", vram: "None", gpu: "Any", speed: "~3 tok/s" },
];

export default function OllamaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Run GLM 5.2 Locally with Ollama</h1>
      <p className="text-gray-500 mb-8">Free, private, no API key needed — run GLM 5.2 on your own machine</p>

      <AdUnit slot="2233445566" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Config</th>
                <th className="text-right py-3 px-4 font-semibold">RAM</th>
                <th className="text-right py-3 px-4 font-semibold">VRAM</th>
                <th className="text-right py-3 px-4 font-semibold">Example GPU</th>
                <th className="text-right py-3 px-4 font-semibold">Speed</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((r) => (
                <tr key={r.tier} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{r.tier}</td>
                  <td className="text-right py-3 px-4">{r.ram}</td>
                  <td className="text-right py-3 px-4">{r.vram}</td>
                  <td className="text-right py-3 px-4">{r.gpu}</td>
                  <td className="text-right py-3 px-4">{r.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Step-by-Step Installation</h2>
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
        <h2 className="text-2xl font-bold mb-4">Use with OpenCode</h2>
        <p className="text-gray-600 mb-4">Once Ollama is running, point OpenCode at your local endpoint:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`# In your OpenCode config (opencode.json)
{
  "model": {
    "provider": "openai",
    "name": "glm4:7b",
    "baseURL": "http://localhost:11434/v1",
    "apiKey": "ollama"
  }
}`}</pre>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <h3 className="font-bold text-yellow-900 mb-2">Tips for Best Performance</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Keep context short — long contexts slow down inference significantly on consumer GPUs</li>
          <li>• Use <code className="bg-yellow-100 px-1 rounded">OLLAMA_NUM_PARALLEL=1</code> if you have limited VRAM</li>
          <li>• Apple Silicon (M-series) gets impressive performance via Metal — M3 Pro can run 7B at ~50 tok/s</li>
          <li>• For coding tasks, 7B performs surprisingly close to the API model on single-file tasks</li>
        </ul>
      </section>
    </div>
  );
}
