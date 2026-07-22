import { useState, useEffect } from "react";
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  Terminal,
  ChevronRight,
  Zap,
  Server,
  Database,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SubsystemHealth } from "../types/startup";

interface InitializationScreenProps {
  onComplete: () => void;
}

export function InitializationScreen({ onComplete }: InitializationScreenProps) {
  const [progress, setProgress] = useState<number>(0);
  const [showConsole, setShowConsole] = useState<boolean>(true);

  const [subsystems, setSubsystems] = useState<SubsystemHealth[]>([
    {
      id: "ai-swarm",
      name: "AI Agent Swarms",
      category: "CORE_INFERENCE",
      status: "PENDING",
      latencyMs: 12,
      details: "Warming up 12 autonomous agent nodes...",
    },
    {
      id: "memory-store",
      name: "Executive Memory Store",
      category: "PERSISTENCE",
      status: "PENDING",
      latencyMs: 8,
      details: "Hydrating context vector cache & memory graph...",
    },
    {
      id: "telemetry",
      name: "WebSocket Telemetry Feed",
      category: "STREAMING",
      status: "PENDING",
      latencyMs: 15,
      details: "Establishing bi-directional market & agent streams...",
    },
    {
      id: "risk-engine",
      name: "Analytics & Risk Engine",
      category: "COMPUTATION",
      status: "PENDING",
      latencyMs: 18,
      details: "Synchronizing portfolio exposure & risk parameters...",
    },
  ]);

  useEffect(() => {
    // Stepwise initialization sequence simulation
    const timer1 = setTimeout(() => {
      setProgress(25);
      setSubsystems((prev) =>
        prev.map((s) =>
          s.id === "ai-swarm" ? { ...s, status: "INITIALIZING" } : s
        )
      );
    }, 150);

    const timer2 = setTimeout(() => {
      setProgress(50);
      setSubsystems((prev) =>
        prev.map((s) =>
          s.id === "ai-swarm"
            ? { ...s, status: "OPERATIONAL" }
            : s.id === "memory-store"
            ? { ...s, status: "INITIALIZING" }
            : s
        )
      );
    }, 350);

    const timer3 = setTimeout(() => {
      setProgress(75);
      setSubsystems((prev) =>
        prev.map((s) =>
          s.id === "memory-store"
            ? { ...s, status: "OPERATIONAL" }
            : s.id === "telemetry"
            ? { ...s, status: "INITIALIZING" }
            : s
        )
      );
    }, 600);

    const timer4 = setTimeout(() => {
      setProgress(100);
      setSubsystems((prev) =>
        prev.map((s) => ({ ...s, status: "OPERATIONAL" }))
      );
    }, 850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Auto-advance upon 100% completion
  useEffect(() => {
    if (progress === 100) {
      const autoTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(autoTimer);
    }
  }, [progress, onComplete]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#07090E] p-6 text-zinc-100 select-none overflow-x-hidden">
      {/* Ambient background styling */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-zinc-950/90 to-[#07090E]" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-4 max-w-6xl w-full mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-zinc-900/80 text-cyan-400">
            <Zap className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              System Initialization
            </h1>
            <p className="text-xs text-zinc-400">
              Warming up AI agent swarms & executive telemetry pipelines
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-2xl font-bold font-mono text-cyan-400">
              {progress}%
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
              Telemetry Status
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onComplete}
            className="rounded-xl border-zinc-800 bg-zinc-900/80 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white"
          >
            Proceed to Lobby
            <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="relative z-10 grid flex-1 grid-cols-1 gap-6 max-w-6xl w-full mx-auto py-6 lg:grid-cols-12">
        {/* Left Column: Subsystem Status Cards */}
        <section className="lg:col-span-7 flex flex-col gap-4">
          {/* Progress Bar */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
              <span className="font-medium text-zinc-300">Overall Boot Progress</span>
              <span className="font-mono text-cyan-400">{progress}% Complete</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-amber-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Subsystem Items Checklist */}
          <div className="space-y-3">
            {subsystems.map((subsystem) => (
              <div
                key={subsystem.id}
                className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 transition-all hover:border-zinc-700/80"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {subsystem.status === "OPERATIONAL" ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    ) : subsystem.status === "INITIALIZING" ? (
                      <Activity className="h-5 w-5 text-cyan-400 animate-spin" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-zinc-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-zinc-200">
                        {subsystem.name}
                      </h3>
                      <span className="rounded bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                        {subsystem.category}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      {subsystem.details}
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono text-xs">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${
                      subsystem.status === "OPERATIONAL"
                        ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/50"
                        : subsystem.status === "INITIALIZING"
                        ? "bg-cyan-950/80 text-cyan-400 border border-cyan-800/50"
                        : "bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {subsystem.status}
                  </span>
                  {subsystem.status === "OPERATIONAL" && (
                    <span className="block text-[10px] text-zinc-500 mt-1">
                      {subsystem.latencyMs}ms
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Live Telemetry Terminal Log */}
        <section className="lg:col-span-5 flex flex-col">
          <div className="flex-1 rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-4 font-mono text-xs text-zinc-300 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="font-semibold text-zinc-200">Live Telemetry Console</span>
              </div>
              <button
                onClick={() => setShowConsole(!showConsole)}
                className="text-[11px] text-zinc-500 hover:text-zinc-300"
              >
                {showConsole ? "Collapse" : "Expand"}
              </button>
            </div>

            {showConsole && (
              <div className="flex-1 space-y-2 overflow-y-auto max-h-[340px] pr-2 text-zinc-400">
                <p className="text-emerald-400">[0.012s] Subsystem bootstrap initiated</p>
                <p>[0.080s] Memory vector cache pre-warmed (4,096 nodes)</p>
                <p>[0.140s] Agent Swarm orchestrator online: 12 nodes listening</p>
                <p>[0.220s] Bi-directional WebSocket handshake established</p>
                <p className="text-cyan-400">[0.450s] Risk analytics engine ready</p>
                {progress >= 75 && (
                  <p className="text-amber-400">[0.720s] Pre-fetching executive briefing feed...</p>
                )}
                {progress === 100 && (
                  <p className="text-emerald-400 font-semibold">[0.850s] All systems OPERATIONAL. Ready for Reception Lobby.</p>
                )}
              </div>
            )}

            <div className="mt-auto border-t border-zinc-900 pt-3 flex items-center justify-between text-[11px] text-zinc-500">
              <span>LATENCY: 12ms</span>
              <span className="text-emerald-400 font-semibold">HEALTH: 100%</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Controls */}
      <footer className="relative z-10 flex max-w-6xl w-full mx-auto items-center justify-between border-t border-zinc-900 pt-4 text-xs text-zinc-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Server className="h-3.5 w-3.5 text-zinc-400" />
            Cluster: us-east-primary
          </span>
          <span className="flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5 text-zinc-400" />
            Cache: Hydrated
          </span>
          <span className="flex items-center gap-1.5">
            <Radio className="h-3.5 w-3.5 text-emerald-400" />
            WS: Connected
          </span>
        </div>
        <span>Step 2 of 5</span>
      </footer>
    </div>
  );
}
