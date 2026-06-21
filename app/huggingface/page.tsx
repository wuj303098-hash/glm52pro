import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 HuggingFace: Download, Run and Fine-tune Guide 2026",
  description:
    "How to download GLM 5.2 from HuggingFace, run inference locally with supported frameworks, and fine-tune the model.",
};

const models = [
  { name: "zai-org/GLM-5.2", role: "Official open weights", use: "Local serving, research, and fine-tuning" },
  { name: "zai-org/GLM-5.2 recipes", role: "Framework guides", use: "vLLM, SGLang, Transformers, KTransformers" },
  { name: "OpenRouter z-ai/glm-5.2", role: "Hosted API route", use: "OpenAI-compatible production API calls" },
];

export default function HuggingFacePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 on HuggingFace</h1>
      <p className="text-gray-500 mb-8">
        Download, run, and fine-tune GLM 5.2 through the official zai-org/GLM-5.2 repository.
      </p>

      <AdUnit slot="1122334455" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Available Resources</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Resource</th>
                <th className="text-left py-3 px-4 font-semibold">Role</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.name} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-xs">{m.name}</td>
                  <td className="py-3 px-4">{m.role}</td>
                  <td className="py-3 px-4 text-gray-600">{m.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Download with huggingface-hub</h2>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto">{`pip install huggingface-hub

from huggingface_hub import snapshot_download

snapshot_download(
    repo_id="zai-org/GLM-5.2",
    local_dir="./GLM-5.2",
    ignore_patterns=["*.msgpack", "*.h5"]
)`}</pre>
      </section>

      <AdUnit slot="2233445566" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Run with Transformers</h2>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto">{`pip install transformers torch accelerate

from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "zai-org/GLM-5.2"
tokenizer = AutoTokenizer.from_pretrained(model_id, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
    trust_remote_code=True
)

prompt = "Write a Python function to reverse a linked list"
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
outputs = model.generate(**inputs, max_new_tokens=512)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`}</pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Serve with vLLM or SGLang</h2>
        <p className="text-gray-600 mb-3">
          For API-style local deployment, prefer the supported serving frameworks instead of old GLM4 Ollama examples.
        </p>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto">{`# vLLM
pip install vllm
vllm serve zai-org/GLM-5.2 --served-model-name glm-5.2

# SGLang
pip install sglang
python -m sglang.launch_server --model-path zai-org/GLM-5.2 --served-model-name glm-5.2`}</pre>
      </section>

      <AdUnit slot="3344556677" />

      <section className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-bold text-blue-900 mb-2">Context and API Note</h3>
        <p className="text-sm text-blue-800">
          GLM 5.2 is documented with a 1M-token context. For hosted access, use Z.ai direct APIs or OpenRouter model
          z-ai/glm-5.2.
        </p>
      </section>
    </div>
  );
}
