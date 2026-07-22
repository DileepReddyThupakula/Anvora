import { BookOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Knowledge Engine & Memory Vault
          </h1>
          <p className="text-xs text-zinc-400">
            Persistent long-term memory, vector indexing, and founder documentation.
          </p>
        </div>
        <Button className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs">
          <Plus className="mr-1.5 h-3.5 w-3.5" />
          Add Knowledge Doc
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Vector Documents</span>
          <div className="mt-2 text-2xl font-bold text-white">1,280 Docs</div>
          <p className="mt-1 text-xs text-purple-400">Neural Embedded</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Memory Vault Size</span>
          <div className="mt-2 text-2xl font-bold text-white">4.2 GB</div>
          <p className="mt-1 text-xs text-cyan-400">Encrypted Local Database</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Synthesized Insights</span>
          <div className="mt-2 text-2xl font-bold text-white">42 Insights</div>
          <p className="mt-1 text-xs text-emerald-400">Auto-compounded weekly</p>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 mb-4">
          <BookOpen className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-white">Neural Knowledge Graph</h3>
        <p className="mx-auto mt-2 max-w-md text-xs text-zinc-400">
          Every project outcome, market trade, and founder note compounds into persistent long-term AI memory.
        </p>
      </div>
    </div>
  );
}
