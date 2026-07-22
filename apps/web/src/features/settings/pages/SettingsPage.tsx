import { Key, Cpu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/app/user";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          System & AI Settings
        </h1>
        <p className="text-xs text-zinc-400">
          Configure executive profile, LLM providers, trading API keys, and local environment.
        </p>
      </div>

      <div className="space-y-6">
        {/* Founder Profile Settings */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <User className="h-5 w-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Founder Profile</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-zinc-400">Name</label>
              <input
                type="text"
                readOnly
                value={currentUser.name}
                className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-400">Title</label>
              <input
                type="text"
                readOnly
                value={currentUser.title}
                className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
          </div>
        </div>

        {/* AI Models & Providers */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="h-5 w-5 text-purple-400" />
            <h3 className="text-base font-bold text-white">Deepu AI Core Configuration</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-3.5">
              <div>
                <p className="text-xs font-semibold text-white">Primary AI Model</p>
                <p className="text-[11px] text-zinc-400">Gemini 3.6 Flash / Pro & Anthropic Claude</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400">
                Connected
              </span>
            </div>
          </div>
        </div>

        {/* API Credentials */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Key className="h-5 w-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">API Credentials & Exchange Keys</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-3.5">
              <div>
                <p className="text-xs font-semibold text-white">Exchange Webhooks (Binance / Coinbase)</p>
                <p className="text-[11px] text-zinc-400">Encrypted in local vault</p>
              </div>
              <Button size="sm" variant="outline" className="rounded-xl border-zinc-800 text-xs">
                Manage Keys
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
