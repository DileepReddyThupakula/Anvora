import { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info,
  ChevronRight,
  Sparkles,
  Check,
  X,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BriefingItem, BriefingPriority, SessionContext } from "../types/startup";

interface ExecutiveBriefingScreenProps {
  sessionContext: SessionContext;
  onComplete: () => void;
}

export function ExecutiveBriefingScreen({
  sessionContext,
  onComplete,
}: ExecutiveBriefingScreenProps) {
  const [activeTab, setActiveTab] = useState<"ALL" | BriefingPriority>("ALL");

  const [briefingItems, setBriefingItems] = useState<BriefingItem[]>([
    {
      id: "briefing-1",
      title: "Algorithmic Market Volatility Alert",
      category: "TRADING_FLEET",
      summary:
        "Overnight market volatility spike detected (+4.2% VIX). Trading Agent Swarm automatically re-balanced portfolio hedge positions to maintain strict 2.5% max drawdown limit.",
      priority: "CRITICAL",
      timestamp: "03:42 AM",
      actionAvailable: "Review Risk Limits",
      triaged: false,
    },
    {
      id: "briefing-2",
      title: "Enterprise Revenue Milestone",
      category: "BUSINESS_KPI",
      summary:
        "Q3 Recurring Revenue reached $14.8M (108% of target). Operations Agent generated contract renewal proposals for top 3 enterprise clients.",
      priority: "ACTION_REQUIRED",
      timestamp: "05:15 AM",
      actionAvailable: "Approve Proposals",
      triaged: false,
    },
    {
      id: "briefing-3",
      title: "AI Swarm Autonomous Maintenance",
      category: "SYSTEM_INFRA",
      summary:
        "Routine memory index compaction completed successfully. All 18 workspace agents updated to latest model weights with zero downtime.",
      priority: "INFORMATIONAL",
      timestamp: "06:00 AM",
      triaged: false,
    },
    {
      id: "briefing-4",
      title: "Strategic M&A Intelligence Digest",
      category: "INTELLIGENCE",
      summary:
        "Research Agent compiled comprehensive competitive analysis report on emerging AI infrastructure acquisitions.",
      priority: "ACTION_REQUIRED",
      timestamp: "06:30 AM",
      actionAvailable: "Open Report",
      triaged: false,
    },
  ]);

  const handleTriage = (id: string) => {
    setBriefingItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, triaged: true } : item))
    );
  };

  const filteredItems = briefingItems.filter((item) => {
    if (activeTab === "ALL") return true;
    return item.priority === activeTab;
  });

  const criticalCount = briefingItems.filter((i) => i.priority === "CRITICAL" && !i.triaged).length;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#07090E] p-6 text-zinc-100 select-none overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-950/90 to-[#07090E]" />

      {/* Header */}
      <header className="relative z-10 flex max-w-6xl w-full mx-auto items-center justify-between border-b border-zinc-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-zinc-900/80 text-amber-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white">
                Executive Intelligence Briefing
              </h1>
              <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-mono text-amber-300 border border-amber-500/30">
                OVERNIGHT SYNTHESIS
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Workspace:{" "}
              <span className="text-zinc-200 font-semibold">
                {sessionContext.workspace?.name || "Anvora Capital"}
              </span>{" "}
              &bull; Persona:{" "}
              <span className="text-amber-400 font-semibold">
                {sessionContext.persona?.title || "Chief Executive"}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-zinc-500" />
            JULY 22, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-zinc-500" />
            07:00 AM EST
          </span>
        </div>
      </header>

      {/* Main Grid */}
      <main className="relative z-10 max-w-6xl w-full mx-auto py-6 grid grid-cols-1 gap-6 lg:grid-cols-12 flex-1">
        {/* Left Column: Macro Financial & Market Summary Widget */}
        <section className="lg:col-span-4 space-y-4">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4" />
                Macro Market Pulse
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                +1.4% GREEN
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-400">Global Portfolio Value</span>
                <span className="font-bold text-white">$142.8M</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-400">Trading Agent Delta (24h)</span>
                <span className="text-emerald-400 font-bold">+$324,500</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-400">Risk Exposure (VaR 99%)</span>
                <span className="text-amber-400 font-bold">1.8% (SAFE)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Active AI Swarm Fleet</span>
                <span className="text-cyan-400 font-bold">18 / 18 ONLINE</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 backdrop-blur-md text-xs text-zinc-400">
            <h4 className="font-semibold text-zinc-200 mb-1">Executive Summary Insight</h4>
            <p className="leading-relaxed">
              Your AI executive fleet resolved 14 routine tasks overnight with 0 manual intervention required. 1 critical risk event was hedged automatically.
            </p>
          </div>
        </section>

        {/* Right Column: 3-Tier Priority Intelligence Stream */}
        <section className="lg:col-span-8 space-y-4">
          {/* Priority Tabs */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("ALL")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "ALL"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                All Items ({briefingItems.length})
              </button>
              <button
                onClick={() => setActiveTab("CRITICAL")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === "CRITICAL"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Critical ({criticalCount})
              </button>
              <button
                onClick={() => setActiveTab("ACTION_REQUIRED")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "ACTION_REQUIRED"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Action Required
              </button>
              <button
                onClick={() => setActiveTab("INFORMATIONAL")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "INFORMATIONAL"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Informational
              </button>
            </div>

            <span className="text-xs text-zinc-500 font-mono">
              TRIAGED: {briefingItems.filter((i) => i.triaged).length} / {briefingItems.length}
            </span>
          </div>

          {/* Cards Stream */}
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl border p-4 transition-all backdrop-blur-md ${
                  item.triaged
                    ? "opacity-50 border-zinc-800 bg-zinc-950/40"
                    : item.priority === "CRITICAL"
                    ? "border-rose-500/50 bg-rose-950/10 shadow-[0_0_20px_rgba(244,63,94,0.1)]"
                    : item.priority === "ACTION_REQUIRED"
                    ? "border-amber-500/40 bg-amber-950/10"
                    : "border-zinc-800 bg-zinc-900/50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {item.priority === "CRITICAL" ? (
                      <AlertTriangle className="h-4 w-4 text-rose-400" />
                    ) : item.priority === "ACTION_REQUIRED" ? (
                      <CheckCircle className="h-4 w-4 text-amber-400" />
                    ) : (
                      <Info className="h-4 w-4 text-cyan-400" />
                    )}

                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                      {item.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500">{item.timestamp}</span>
                </div>

                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{item.summary}</p>

                {/* Quick Triage Buttons */}
                <div className="mt-4 flex items-center justify-between border-t border-zinc-800/80 pt-3">
                  <span className="text-[11px] text-zinc-500 font-mono">
                    Priority: <span className="text-zinc-300 font-semibold">{item.priority}</span>
                  </span>

                  {!item.triaged ? (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleTriage(item.id)}
                        className="h-7 text-[11px] rounded-lg border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                      >
                        <X className="mr-1 h-3 w-3 text-zinc-400" />
                        Dismiss
                      </Button>

                      {item.actionAvailable && (
                        <Button
                          size="sm"
                          onClick={() => handleTriage(item.id)}
                          className="h-7 text-[11px] rounded-lg border border-amber-500/40 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
                        >
                          <Check className="mr-1 h-3 w-3" />
                          {item.actionAvailable}
                        </Button>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="h-3.5 w-3.5" /> Triaged
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Launch HQ CTA */}
          <div className="pt-4 flex justify-end">
            <Button
              onClick={onComplete}
              size="lg"
              className="rounded-xl border border-amber-500/50 bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-6 text-sm font-bold text-zinc-950 hover:from-amber-400 hover:to-yellow-400 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all"
            >
              Enter Command Center
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl w-full mx-auto border-t border-zinc-900 pt-4 text-xs text-zinc-500 flex justify-between">
        <span>EXECUTIVE BRIEFING SYNTHESIS: COMPLETE</span>
        <span>Step 4 of 5</span>
      </footer>
    </div>
  );
}
