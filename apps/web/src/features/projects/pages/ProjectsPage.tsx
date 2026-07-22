import { FolderKanban, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Projects Workspace
          </h1>
          <p className="text-xs text-zinc-400">
            Track AI-driven software development, tasks, and project milestones.
          </p>
        </div>
        <Button className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs">
          <Plus className="mr-1.5 h-3.5 w-3.5" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">In Execution</span>
          <div className="mt-2 text-2xl font-bold text-white">4 Active</div>
          <p className="mt-1 text-xs text-cyan-400">Anvora Shell • Phase 1</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Completed Milestones</span>
          <div className="mt-2 text-2xl font-bold text-white">18 Done</div>
          <p className="mt-1 text-xs text-emerald-400">100% QA Passed</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Backlog Tasks</span>
          <div className="mt-2 text-2xl font-bold text-white">12 Queued</div>
          <p className="mt-1 text-xs text-zinc-400">Prioritized by Deepu AI</p>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 mb-4">
          <FolderKanban className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-white">Kanban & Milestone Engine</h3>
        <p className="mx-auto mt-2 max-w-md text-xs text-zinc-400">
          AI employees auto-assign tasks, execute pull requests, and report progress directly to Deepu AI.
        </p>
      </div>
    </div>
  );
}
