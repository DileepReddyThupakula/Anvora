import { useState } from "react";
import { currentUser } from "@/app/user";
import {
  Bot,
  TrendingUp,
  Briefcase,
  Zap,
  ArrowUpRight,
  Sparkles,
  Send,
  Cpu,
  CheckCircle2,
  Clock,
  BookOpen,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [commandInput, setCommandInput] = useState("");

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    // Command submission logic
    setCommandInput("");
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Executive Briefing Greeting */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Executive Command Center
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Welcome back, {currentUser.name}.
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Deepu AI Digital Twin and your AI Workforce are operating at peak efficiency.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="rounded-xl border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-white text-xs"
          >
            <Clock className="mr-1.5 h-3.5 w-3.5 text-zinc-400" />
            Executive Briefing PDF
          </Button>
          <Button className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs shadow-lg shadow-cyan-500/20">
            <Plus className="mr-1.5 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      {/* Deepu AI Command Bar Interface */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-cyan-950/30 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Deepu AI • Digital Twin Direct Prompt
              </h3>
              <p className="text-[11px] text-zinc-400">
                Instruct your AI workforce, deploy strategies, or request business insights.
              </p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
            AI Core Ready
          </span>
        </div>

        <form onSubmit={handleCommandSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              placeholder="e.g., 'Analyze tech stock momentum', 'Draft SaaS product spec', or 'Run daily summary'..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>
          <Button
            type="submit"
            className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold px-5"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* KPI Overview Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: AI Workforce */}
        <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm hover:border-zinc-700/80 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400">AI Workforce</span>
            <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
              <Bot className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-white">6 Active</div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-400">
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>98.4% efficiency</span>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-zinc-500 border-t border-zinc-800/60 pt-2.5">
            4 tasks executing in background
          </p>
        </div>

        {/* Card 2: Trading Workspace */}
        <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm hover:border-zinc-700/80 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400">Trading Portfolio</span>
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-white">$142,850.00</div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-400">
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>+$5,820 today (+4.2%)</span>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-zinc-500 border-t border-zinc-800/60 pt-2.5">
            12 active automated algorithms
          </p>
        </div>

        {/* Card 3: Business Ventures */}
        <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm hover:border-zinc-700/80 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400">Active Ventures</span>
            <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
              <Briefcase className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-white">4 Projects</div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-cyan-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>18 milestones done</span>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-zinc-500 border-t border-zinc-800/60 pt-2.5">
            Next release: Anvora SaaS MVP
          </p>
        </div>

        {/* Card 4: Knowledge Base */}
        <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm hover:border-zinc-700/80 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400">Knowledge Base</span>
            <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
              <BookOpen className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-white">1,280 Docs</div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-purple-400">
              <Cpu className="h-3.5 w-3.5" />
              <span>Neural indexed</span>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-zinc-500 border-t border-zinc-800/60 pt-2.5">
            42 insights generated this week
          </p>
        </div>
      </div>

      {/* Main Grid: Active AI Agents & Strategic Priorities */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Active AI Employees Status (2 cols) */}
        <div className="lg:col-span-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white">
                Active AI Employees & Autonomous Agents
              </h3>
              <p className="text-xs text-zinc-400">
                Real-time status of your digital company workforce
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl border-zinc-800 text-xs text-zinc-400 hover:text-white"
            >
              View All Workforce
            </Button>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Deepu AI Twin",
                role: "Chief Executive Twin",
                status: "Executive Oversight & Orchestration",
                state: "Active",
                color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
              },
              {
                name: "Alpha Trader AI",
                role: "Quantitative Trader",
                status: "Monitoring BTC/USDT Momentum & Risk Parameters",
                state: "Trading",
                color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
              },
              {
                name: "Architect AI",
                role: "Lead Software Engineer",
                status: "Compiling Anvora Frontend Shell Architecture",
                state: "Executing",
                color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
              },
              {
                name: "Research Synthesizer",
                role: "Market Intelligence",
                status: "Summarizing macro rate decisions & sector flows",
                state: "Standby",
                color: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20",
              },
            ].map((agent, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-zinc-800/60 bg-zinc-950/60 p-4 transition-all hover:border-zinc-700/80"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 font-bold text-xs">
                    {agent.name.substring(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-semibold text-white">
                        {agent.name}
                      </h4>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        • {agent.role}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      {agent.status}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${agent.color}`}
                >
                  {agent.state}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Priorities Sidebar (1 col) */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm space-y-6">
          <div>
            <h3 className="text-base font-bold text-white">Strategic Priorities</h3>
            <p className="text-xs text-zinc-400">High impact roadmap execution</p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Launch Executive Shell",
                desc: "React 19, Vite, Tailwind v4, shadcn UI",
                progress: 90,
                status: "In Progress",
              },
              {
                title: "Automated Trading Engine",
                desc: "Integration with exchange webhooks & risk limits",
                progress: 65,
                status: "Active",
              },
              {
                title: "Knowledge Vault Sync",
                desc: "Indexing founder notes & strategy docs",
                progress: 40,
                status: "Queued",
              },
            ].map((priority, i) => (
              <div
                key={i}
                className="space-y-2 rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-3.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">
                    {priority.title}
                  </span>
                  <span className="font-mono text-zinc-400">
                    {priority.progress}%
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">{priority.desc}</p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    style={{ width: `${priority.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Founder Recommendation</span>
            </div>
            <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
              Review current market volatility parameters before deploying additional capital to swing trading strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
