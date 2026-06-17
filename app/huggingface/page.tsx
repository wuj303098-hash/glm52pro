import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 HuggingFace — Download, Run & Fine-tune Guide 2026",
  description: "How to download GLM 5.2 from HuggingFace, run inference locally, and fine-tune the model. Full guide with code examples.",
};

const models = [
  { name: "THUDM/GLM-5.2-7B", size: "~15GB", vram: "8GB+", use: "Local coding tasks, Ollama" },
  { name: "THUDM/GLM-5.2-32B", size: "~65GB", vram: "40GB+", use: "Full capability, server use" },
  { name: "THUDM/GLM-5.2-7B-GGUF", size: "~4.5GB", vram: "6GB+", use: "Quantized, best for consumer GPU" },
];

export default function HuggingFacePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 on HuggingFace</h1>
      <p className="text-gray-500 mb-8">Download, run, and fine-tune GLM 5.2 — all model variants in one place</p>

      <AdUnit slot="1122334455" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Available Models</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Model ID</th>
                <th className="text-right py-3 px-4 font-semibold">Download Size</th>
                <th className="text-right py-3 px-4 font-semibold">Min VRAM</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.name} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-xs">{m.name}</td>
                  <td className="text-right py-3 px-4">{m.size}</td>
                  <td className="text-right py-3 px-4">{m.vram}</td>
                  <td className="py-3 px-4 text-gray-600">{m.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Method 1: Download with huggingface-hub</h2>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto">{`pip install huggingface-hub

# Download 7B model
from huggingface_hub import snapshot_download

snapshot_download(
    repo_id="THUDM/GLM-5.2-7B",
    local_dir="./glm-5.2-7b",
    ignore_patterns=["*.msgpack", "*.h5"]
)`}</pre>
      </section>

      <AdUnit slot="2233445566" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Method 2: Run with Transformers</h2>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto">{`pip install transformers torch accelerate

from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "THUDM/GLM-5.2-7B"
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
        <h2 className="text-2xl font-bold mb-4">Method 3: Ollama (Easiest)</h2>
        <p className="text-gray-600 mb-3">For most users, Ollama is the simplest way to run GLM 5.2 locally — no Python setup needed.</p>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto">{`# Install Ollama, then:
ollama pull glm4:7b
ollama run glm4:7b`}</pre>
        <p className="text-sm text-gray-500 mt-2">
          See the full <a href="/ollama" className="text-blue-600 hover:underline">Ollama setup guide →</a>
        </p>
      </section>

      <AdUnit slot="3344556677" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Fine-tuning GLM 5.2</h2>
        <pre className="bg-gray-900 text-green-400 rounded-xl p-5 text-sm overflow-x-auto">{`pip install peft trl datasets

from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model
from trl import SFTTrainer

# Load base model
model = AutoModelForCausalLM.from_pretrained("THUDM/GLM-5.2-7B", trust_remote_code=True)

# LoRA config (fine-tune on 1x 24GB GPU)
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: ~8M / 7B total — only 0.1% updated`}</pre>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-bold text-blue-900 mb-2">HuggingFace Space</h3>
        <p className="text-sm text-blue-800">
          Don&apos;t want to download? Try GLM 5.2 directly in the browser via the official HuggingFace Space demo — no setup required. Search &quot;GLM-5.2&quot; on huggingface.co/spaces.
        </p>
      </section>
    </div>
  );
}
